import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterComponent } from './counter.component.ts';

import { AppComponent } from './app.component.ts';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}