import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html'
})
export class TableRowComponent implements OnInit {

  @Input() character: any;
  @Input() columns: string[];
  @Output() emitRowSelected: EventEmitter<any>;

  constructor() {
    this.emitRowSelected = new EventEmitter();
  }

  ngOnInit() {
    
  }

  onCellClick(row) {
    this.emitRowSelected.emit(row);
  }

}
