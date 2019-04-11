import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-row-incorrect',
  templateUrl: './table-row-incorrect.component.html'
})
export class TableRowIncorrectComponent implements OnInit {

  @Input() ch: any;
  @Input() keys: string[];

  constructor() { }

  ngOnInit() {
  }

}
