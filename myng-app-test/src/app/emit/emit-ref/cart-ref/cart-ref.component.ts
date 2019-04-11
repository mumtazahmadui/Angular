import { Directive, HostListener, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { EmitrefService } from "../../services/emitref.service";

@Component({
  selector: 'app-cart-ref',
  templateUrl: './cart-ref.component.html',
  styleUrls: ['./cart-ref.component.css']
})
export class CartRefComponent implements OnInit {
  @Input() editable: boolean = false;
  @Input() cartItems: any = {};
  @Input() listItems: any[] = [];
  @Output() emitItems: EventEmitter<any> = new EventEmitter();

  constructor(private emitrefService: EmitrefService) {

    this.emitrefService.onMyEvent.subscribe(
      (values: any) => {
        this.listItems = values.list;
        this.editable = values.editable;

        console.log('Triggered!', values);
      }
    );

  }

  ngOnInit() {
    this.cartItems = { id: '', productname: '', amount: '', price: '' };
  }
  getFormValues() {
    this.emitItems.emit(Object.assign({}, this.cartItems));
  }
  onSave() {
    console.log(this.listItems);
    // this.itemTemp = {};
    // this.items = this.itemTemp;
    // for (let key in this.items) {
    //   console.log(this.items[key]);

    //   if (this.items[key] === this.itemTemp.id) {
    //     // this.items = this.itemTemp;
    //   }
    // }
  }

  onCancel() {
    this.editable = false;
  }
}
