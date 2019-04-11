import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  rooms = [];
  room;
  connection;
  message;
  user: string;
  currRoom: {};

  constructor(private chatService: ChatService) { }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  addUser() {
    this.chatService.addUser(this.user);
  }

  switchRoom(room: string) {
    console.log(room);
    this.chatService.switchRoom(room);
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });


    this.connection = this.chatService.updateRoom().subscribe(result => {
      console.log(result["_curroom"]);

      for (let index in result["_rooms"]) {
        this.rooms.push(result["_rooms"][index]);

        // if(result["_rooms"][index] = result["_curroom"]){
        //   this.rooms.push( result["_curroom"] );
        //   return;
        // }else{
        //   this.rooms.push(result["_rooms"][index]);
        // }

      }
      
    });

  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
