import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AdventureTimeService } from '../services/adventure-time.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];
  @Input() serviceSelected: string;

  constructor(private atService: AdventureTimeService) {
    
  }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.characters = this.atService.getCharacters();
  }

  rowSelected(event) {
    alert(event);
  }

}
