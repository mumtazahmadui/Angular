import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingParamComponent } from './routing-param/routing-param.component';
import { RoutingParamDetailComponent } from './routing-param/routing-param-detail.component';
import { EventEmitterComponent } from './eventemitter/eventemitter.component';
import { CounterComponent } from './eventemitter/counter.component';
import { DialogAppComponent } from './modal/dialog-app.component';
import { DialogAnimationComponent } from './modal/dialog-animation.component';

import { MiscellaneousRoutingModule } from './miscellaneous.routing.module';

const routes: Routes = [{
  path: 'product/:id',
  component: RoutingParamDetailComponent
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, //modal dialog
    MiscellaneousRoutingModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
  declarations: [
    RoutingParamComponent,
    RoutingParamDetailComponent,
    EventEmitterComponent,
    CounterComponent,
    DialogAppComponent,
    DialogAnimationComponent
  ],
  providers: []
})
export class MiscellaneousModule { }