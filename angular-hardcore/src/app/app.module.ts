import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

import Util from './app.util';

@Component({
  selector: 'base-app',
  template: `
<div class="wrapper">
  <div class="header"><header-app></header-app></div>
  <div class="box sidebar"><sidebar-app></sidebar-app></div>
  <div class="box content"><content-app></content-app>
  <!--<div class="box footer">Footer</div>-->
</div>
  `
}) export class AppComponent { }

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Util.getModules(), //increase modules from Util
    RouterModule.forRoot(Util.getRouting(), { //add routing from Util
        useHash: true
      })
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    Util.getComponents() //increase components from Util
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
