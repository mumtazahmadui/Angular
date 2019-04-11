import { HeaderComponent } from './layout/header.component';
import { SidebarComponent } from './layout/sidebar.component';
import { ContentComponent } from './layout/content.component';

import { WelcomeComponent } from './topics/welcome/welcome.component';
import { ValidationModule } from './topics/validation/validation.module';
import { TodolistModule } from './topics/todolist/todolist.module';
import { MiscellaneousModule } from './topics/miscellaneous/miscellaneous.module';

//========================Increase Module, Component, Router========================
let increaseModules = [
  ValidationModule,
  TodolistModule,
  MiscellaneousModule
];

let increaseComponents = [
  HeaderComponent,
  SidebarComponent,
  ContentComponent,
  WelcomeComponent
];
//Only WelcomeComponent 
let increaseRouting = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' }
];
//==================================================================================
class Util {
  getModules() { return increaseModules; }
  getComponents() { return increaseComponents; }
  getRouting() { return increaseRouting; }
} export default new Util();