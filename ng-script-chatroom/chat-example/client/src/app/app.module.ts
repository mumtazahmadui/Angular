import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './index/app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { usersRouting } from "./users/users.routing";
import { chatRouting } from "./chat/chat.routing";
import { UsersModule } from "./users/users.module";
import { ChatModule } from "./chat/chat.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    
    UsersModule,
    usersRouting,
    
    ChatModule,
    chatRouting,
    
    routing,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
