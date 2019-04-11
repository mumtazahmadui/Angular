import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './reactive/user.service';
import { ReactiveFormComponent } from './reactive/reactive-form.component';
import { ValidationRoutesModule } from './validation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationRoutesModule
  ],
  exports: [RouterModule],
  declarations: [
    ReactiveFormComponent
  ],
  providers: [
    UserService
  ]
})
export class ValidationModule { }