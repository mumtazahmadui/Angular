import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { CartRefComponent } from '../cart-ref/cart-ref.component';
import { EmitrefService } from '../../services/emitref.service';

@Component({
  selector: 'app-item-ref',
  templateUrl: './item-ref.component.html',
  styleUrls: ['./item-ref.component.css']
})
export class ItemRefComponent implements OnInit {
  listDetail: any = [];
  listBinding: {};

  constructor(private emitrefService: EmitrefService) { }

  ngOnInit(): void { }

  showItem(vals) {
    this.listDetail.push(vals);
    this.emitrefService.trigger({ list: this.listDetail, currItem: vals, editable: false });
  }
  setDataBind(item) {
    this.listBinding = Object.assign({}, item);
    this.emitrefService.trigger({ list: this.listDetail, currItem: item, editable: true });
  }
}
