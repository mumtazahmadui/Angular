'use strict';

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);





// usernames which are currently connected to the chat
var usernames = {};
// rooms which are currently available in chat
var rooms = ['room1', 'room2', 'room3'];




io.on('connection', (socket) => {


  socket.on('adduser', function (username) {
    socket.username = username;
    socket.room = 'room1';
    usernames[username] = username;
    socket.join('room1');
    socket.emit('updatechat', 'SERVER', 'you have connected to room1');
    socket.broadcast.to('room1').emit('updatechat', 'SERVER', username + ' has connected to this room');
    socket.emit('updaterooms', rooms, 'room1');
  });



  socket.on('add-message', (message) => {
    console.log(message);
    io.emit('message', { type: 'new-message', text: message });
  });


  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

});

http.listen(5000, () => {
  console.log('started on port 5000');
});
