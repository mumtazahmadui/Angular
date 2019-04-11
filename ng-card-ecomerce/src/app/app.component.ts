import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div *ngFor="let product of products">
    <app-product-item 
      [product]="product" 
      (onSelect)="cart($event)">
      [amount]="_amount" 
      (onChange)="amountChange($event)">

    </app-product-item>
  </div>

  <hr />
  <div *ngIf="showCart;">
    <h3>[รายการสินค้าที่สั่ง]</h3>
    <p>สินค้า: {{selectedProduct.items?.name}}</p>
    <p>จำนวน: {{selectedProduct?.amount}}</p>
    <p><b>ยอดรวม</b>: {{selectedProduct?.total}}</p>
  </div>
  `
})
export class AppComponent {
  selectedProduct: any = {};
  products: any;
  _amount: number = 0;
  showCart: boolean = false;

  constructor() {
    this.products = [
      { id: 1001, name: 'iPhone', price: 500.00, stock: 5 },
      { id: 1002, name: 'iPad', price: 800.00, stock: 10 },
      { id: 1003, name: 'Macbook', price: 1200.00, stock: 7 }
    ];

    this.selectedProduct = this.products[0];
  }
  cart(event) {
    this.selectedProduct = event;
    this.showCart = true;
  }
  amountChange(event) {
    this._amount = event;
  }
}
