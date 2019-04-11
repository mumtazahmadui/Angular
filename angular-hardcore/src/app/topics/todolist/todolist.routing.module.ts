import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './multiform/user.component';
import { BindingDataComponent } from './binding-data/binding-data.component';

const routes: Routes = [
  { path: 'multiform', component: UserComponent, pathMatch: 'full' },
  { path: 'binding-data', component: BindingDataComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
  declarations: []
}) export class TodolistRoutingModule { }
