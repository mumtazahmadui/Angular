import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Output()
  listEmit: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.listEmit.emit({
      id: 1222,
      userid: 10940,
      productname: 'Angular cook book 1',
      amount: 2,
      price: 15000
    });
  }

}
