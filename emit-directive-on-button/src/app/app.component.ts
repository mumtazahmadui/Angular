import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  constructor() { }

  ngOnInit() { }

  log() {
    this.count++;
    console.log('Clicked!');
  }
}
