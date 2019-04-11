import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DebounceClickDirective } from './debounce-click.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DebounceClickDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
