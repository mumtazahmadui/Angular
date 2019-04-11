import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewInit {
  messages = [];
  rooms = [];
  room;
  connection;
  message;
  user: string;
  currRoom: {};
  private url = 'http://localhost:5000';
  socket: any;

  constructor(private chatService: ChatService) { }
  ngAfterViewInit(): void {
    this.socket = io(this.url);
    this.socketTalk();
  }
  ngOnInit() { }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  socketTalk() {
    let _this = this;

    this.socket.on('updatechat', function (username, msg) {
      _this.updatechat(msg);
    });

    this.socket.on('updaterooms', function (rooms, current_room) {
      _this.updaterooms(rooms, current_room);

    });
  }
  updatechat(msg) {
    let msgEl = document.getElementById("message");
    let div = document.createElement("DIV");

    div.appendChild(document.createTextNode(msg));
    msgEl.appendChild(div);
  }
  updaterooms(rooms, currRoom) {
    let _this = this;
    let dom = document.getElementById("rooms");

    for (let v of rooms) {
      if (v === currRoom) {
        let node = document.createElement("LI");
        let textnode = document.createTextNode(v);
        node.appendChild(textnode);
        dom.appendChild(node);

        node.addEventListener('click', function () {
          console.log(this.innerHTML)
        });
      } else {
        let node = document.createElement("LI");
        let textnode = document.createTextNode(v);
        node.appendChild(textnode);
        dom.appendChild(node);

        node.addEventListener('click', function () {
          _this.switchRoom(this.innerHTML);
        });
      }

    }
  }
  addUser() {
    this.socket.emit('adduser', this.user);
  }
  sendChat() {
    this.socket.emit('sendchat', this.message);
  }
  switchRoom(room) {
    let dom = document.getElementById("rooms");
    dom.innerHTML = "";
    this.socket.emit('switchRoom', room);
  }
}
