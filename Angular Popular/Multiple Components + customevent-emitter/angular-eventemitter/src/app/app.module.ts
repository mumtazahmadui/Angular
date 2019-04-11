import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CounterComponent } from './counter.component.ts';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
