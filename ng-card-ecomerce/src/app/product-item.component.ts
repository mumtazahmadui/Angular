import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  template: `
  <div>
    <span>
      สินค้า {{product.name}}, ราคา: {{product.price}}
      <span clas="btn-span">
        <button (click)="decrement()">-</button>
          <input class="input" type="text" [value]="amount" [readonly]="true"/>
        <button (click)="increment()">+</button>
      </span>
    </span>
    <button class="button" (click)="select()">Buy</button>

    | สั่ง: {{amount}}, รวม : {{total}} |
  </div>
  `,
  styles: [
    `.input { width:40px; text-align: center; }
     .button { margin: 3px; }
     .btn-span { margin-left: 200px; }
    `
  ]
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Output() onSelect: EventEmitter<any>;
  @Input() amount: number = 1;
  @Output() onChange: EventEmitter<number>;
  total: number = 0;

  constructor() {
    this.onSelect = new EventEmitter();
    this.onChange = new EventEmitter<number>();
  }

  ngOnInit() {
    this.calculateTotal();
  }

  increment() {
    this.amount++;
    if (this.amount > this.product.stock) {
      alert('product in stock: ' + this.product.stock);
      this.amount = this.product.stock;
      return;
    }
    this.calculateTotal();
    this.onChange.emit(this.amount);
  }
  decrement() {
    this.amount--;
    if (this.amount < 1) this.amount = 1;

    this.calculateTotal();
    this.onChange.emit(this.amount);
  }
  calculateTotal() {
    this.total = this.amount * this.product.price;
  }
  select() {
    this.onSelect.emit(
      { items: this.product, amount: this.amount, total: this.total }
    );
  }
}