import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './emit-data/cart/cart.component';
import { ItemComponent } from './emit-data/item/item.component';
import { CartRefComponent } from './emit-ref/cart-ref/cart-ref.component';
import { ItemRefComponent } from './emit-ref/item-ref/item-ref.component';
import { EmitRefMainComponent } from './emit-ref/emit-ref-main.component';

import { EmitDirectiveTodoComponent } from './emit-directive-todo/emit-directive-todo.component';
import { EmitTableTodoComponent } from './emit-directive-passing/emit-main.component';
import { EmitDirectiveTableComponent } from './emit-directive-table/emit-directive-table.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'item', component: ItemComponent },
  { path: 'cart-ref', component: CartRefComponent },
  { path: 'item-ref', component: ItemRefComponent },
  { path: 'emit-ref', component: EmitRefMainComponent },
  { path: 'emit-directive-todo', component: EmitDirectiveTodoComponent },
  { path: 'emit-table-todo', component: EmitTableTodoComponent },
  { path: 'emit-directive-table', component: EmitDirectiveTableComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class EmitRoutingModule { }
