import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './multiform/user.component';
import { BindingDataComponent } from './binding-data/binding-data.component';
import { BindingDataDetailComponent } from './binding-data/binding-data-detail.component';
import { TodolistRoutingModule } from './todolist.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodolistRoutingModule
  ],
  exports: [RouterModule],
  declarations: [
    UserComponent,
    BindingDataComponent,
    BindingDataDetailComponent
  ],
  providers: []
})
export class TodolistModule { }