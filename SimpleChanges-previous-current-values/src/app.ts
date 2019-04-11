//our root app component
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child';
import { OtherChildComponent } from './other-child';

@Component({
  selector: 'my-app',
  template: `
    <my-name [name]="name"></my-name>
    <my-last-name [name]="last"></my-last-name>
  `,
})
export class App {
  name: string;
  last: string;
  
  constructor() {
    this.name = 'Carlos';
    this.last = 'Vega';
    
    setTimeout(() => {
      this.name = 'Miguel';
      this.last = 'Rodriguez';
    }, 2000);
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, ChildComponent, OtherChildComponent ],
  bootstrap: [ App ]
})
export class AppModule {}