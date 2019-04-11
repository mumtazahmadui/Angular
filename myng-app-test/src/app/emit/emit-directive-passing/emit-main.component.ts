import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emit-main',
  template: `
  <app-emit-detail 
    [iprofile]='profile'
    [findItem]="findOne"
    (onEmitSelected)="onSelected($event)">

  </app-emit-detail>
  <hr/>
  [Result] : {{itemDisplay.id}}, {{itemDisplay.fullname}}, {{itemDisplay.age}}
  `
})
export class EmitTableTodoComponent {

  findOne: any;
  itemDisplay: any;
  profile: any = [
    {
      id: 1001,
      fullname: 'Kraipob',
      age: 20
    },
    {
      id: 1002,
      fullname: 'Saengkhunthod',
      age: 18
    }
  ];

  constructor() {
    this.findOne = { id: 1001 };
  }

  onSelected(event) {
    console.log('!retrive data', event.row);
    this.itemDisplay = event.row;
  }

}

