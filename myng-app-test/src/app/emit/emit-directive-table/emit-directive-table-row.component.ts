import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  template: `
    <td *ngFor="let col of columns; let i=index;" (click)="onCellClick(rowObj, i)">
      {{rowObj[col]}}
    </td>
  `,
})
export class EmitDirectiveTableRowComponent implements OnInit {
  @Input() rowObj: any;
  @Input() columns: string[];
  @Output() onCellEmit: EventEmitter<any>;

  constructor() {
    this.onCellEmit = new EventEmitter();
  }

  ngOnInit() { }

  onCellClick(row, cellIndex) {
    console.log('cellIndex : ', cellIndex);
    this.onCellEmit.emit({ row: row, cellIndex: cellIndex });
  }

}
