import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmitModule } from './emit/emit.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule, //Don't forget add here
    EmitModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
