import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'http://localhost:5000';
  private socket;

  sendMessage(message) {
    this.socket.emit('add-message', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  addUser(user) {
    console.log("add user : " + user);
    this.socket.emit('adduser', user);
  }


  updateRoom() {
    // this.socket.on('updaterooms', function(rooms, current_room) {});
    console.log("update Room");
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('updaterooms', (rooms, curroom) => {
        observer.next({_rooms: rooms, _curroom: curroom});
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;

  }



  switchRoom(room) {
    this.socket.emit('switchRoom', room);
  }

}