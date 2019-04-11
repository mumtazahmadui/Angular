import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmitRoutingModule } from './emit-routing.module';
import { CartComponent } from './emit-data/cart/cart.component';
import { ItemComponent } from './emit-data/item/item.component';
import { CartRefComponent } from './emit-ref/cart-ref/cart-ref.component';
import { ItemRefComponent } from './emit-ref/item-ref/item-ref.component';
import { EmitRefMainComponent } from './emit-ref/emit-ref-main.component';
import { EmitrefService } from './services/emitref.service';
import { EmitDirectiveTodoComponent } from './emit-directive-todo/emit-directive-todo.component';
import { ProductItemComponent } from './emit-directive-todo/product-item.component';
import { EmitTableTodoComponent } from './emit-directive-passing/emit-main.component';
import { EmitDetailTodoComponent } from './emit-directive-passing/emit-detail.component';
import { EmitDirectiveTableComponent } from './emit-directive-table/emit-directive-table.component';
import { EmitDirectiveTableRowComponent } from './emit-directive-table/emit-directive-table-row.component';
import { AdventureService } from './emit-directive-table/services/adventure.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    EmitRoutingModule
  ],
  declarations: [
    CartComponent,
    ItemComponent,
    CartRefComponent,
    ItemRefComponent,
    EmitRefMainComponent,
    EmitDirectiveTodoComponent,
    ProductItemComponent,
    EmitTableTodoComponent,
    EmitDetailTodoComponent,
    EmitDirectiveTableComponent,
    EmitDirectiveTableRowComponent
  ],
  providers: [
    EmitrefService,
    AdventureService
  ]
})
export class EmitModule { }
