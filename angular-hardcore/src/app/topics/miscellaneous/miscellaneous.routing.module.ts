import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventEmitterComponent } from './eventemitter/eventemitter.component';
import { RoutingParamComponent } from './routing-param/routing-param.component';
import { DialogAppComponent } from './modal/dialog-app.component';

const routes: Routes = [
  { path: 'routing-param', component: RoutingParamComponent, pathMatch: 'full' },
  { path: 'eventemitter', component: EventEmitterComponent, pathMatch: 'full' },
  { path: 'dialog-animation', component: DialogAppComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
  declarations: []
}) export class MiscellaneousRoutingModule { }
