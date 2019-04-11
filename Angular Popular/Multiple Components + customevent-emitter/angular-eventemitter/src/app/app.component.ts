import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
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
export class AppComponent {
  myCount: number = 10;

  countChange(event) {
    console.log(event);
    this.myCount = event;
  }
}