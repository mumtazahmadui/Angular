import { Component } from '@angular/core';

@Component({
  selector: '',
  styles: [''],
  template: `
    <div class="app">
      Parent: {{ myCount }}

      <app-counter
        [count]="myCount"
        (change)="countChange($event)">
      </app-counter>

    </div>
  `
})
export class EventEmitterComponent {
  myCount: number = 10;

  countChange(event) {
    console.log("event : "+event);
    this.myCount = event;
  }
}




