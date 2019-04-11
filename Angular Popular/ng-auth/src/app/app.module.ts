import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule } from './router.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthService } from './auth/auth.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, AccountComponent, CallbackComponent ],
  providers:    [AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
