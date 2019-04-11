import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AdventureService } from './services/adventure.service';

@Component({
  selector: 'app-table',
  template: `
  <div class="mystyle">
  <input type="text" [(ngModel)]="itemsBind.name" /><br/>
  <input type="text" [(ngModel)]="itemsBind.age" /><br/>
  <input type="text" [(ngModel)]="itemsBind.species" /><br/>
  <input type="text" [(ngModel)]="itemsBind.occupation" /><br/>
  </div>

  <table class="table table-bordered mystyle">
  <thead>
  <tr>
    <th *ngFor="let column of listColumn">{{column}}</th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let row of listRow | async" 
        app-table-row [rowObj]="row" [columns]="listColumn" 
        (onCellEmit)="onCellClick($event)"
        (click)="onRowClick(row)">
  </tr>
  </tbody>
  `,
  styles: [
    `input {width: 30%; margin: 3px;}
    .mystyle { width: 70%; margin: 20px;}
    `]
})
export class EmitDirectiveTableComponent implements OnInit {
  listRow: Observable<any[]>;
  listColumn: string[];
  itemsBind: any = {};

  constructor(private adventureService: AdventureService) { }

  ngOnInit() {
    this.listColumn = this.adventureService.getColumns();
    this.listRow = this.adventureService.getDataRows();
  }
  onCellClick(event) {
    console.log('onCellClick: ', event);
  }
  onRowClick(row) {
    // console.log('row: ', row);
    this.itemsBind = Object.assign({}, row);
  }
}
