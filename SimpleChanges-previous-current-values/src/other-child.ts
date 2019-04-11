import { 
  Component, Input,
  OnInit,
  OnChanges, SimpleChanges, SimpleChange
} from '@angular/core';

@Component({
  selector: 'my-last-name',
  template: `
      <h2>Last name: {{_name}} ({{ name }})</h2>
  `,
})
export class OtherChildComponent implements OnChanges, OnInit {
  @Input() name: string;
  private _name: string;
  constructor() {}
  
  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.name;
    console.log('prev value: ', name.previousValue);
    console.log('got name: ', name.currentValue);
    this._name = name.currentValue.toUpperCase();
  }
  
  ngOnInit() {
    console.log('on init');
    console.log(this.name);
  }
}
