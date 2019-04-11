import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: {}
  status: Boolean = false;

  constructor() { }

  ngOnInit() {

  }
  show() {
    this.status = true;
  }
  hide() {
    this.status = false;
  }
  showItem(vals) {
    this.items = vals;
  }

}
