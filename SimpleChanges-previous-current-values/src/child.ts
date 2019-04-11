import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-name',
  template: `
      <h2>First name: {{name}} ({{_name}})</h2>
  `,
})
export class ChildComponent implements OnInit {
  private _name: string;
  constructor() {}
  
  get name(): string {
    // transform value for display
    return this._name.toUpperCase();
  }
  
  @Input()
  set name(name: string): void {
    console.log('prev value: ', this._name);
    console.log('got name: ', name);
    this._name = name;
  }
  
  ngOnInit() {
    console.log('on init');
    console.log(this._name);
  }
}
