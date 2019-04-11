import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive/reactive-form.component';

const routes: Routes = [{ path: 'validation', component: ReactiveFormComponent, pathMatch: 'full' }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
  declarations: []
}) export class ValidationRoutesModule { }
