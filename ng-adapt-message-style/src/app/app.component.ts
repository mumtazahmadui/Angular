import { Component } from '@angular/core';

import { MessageTypes } from './message/message.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  messageTypes = MessageTypes;
}
