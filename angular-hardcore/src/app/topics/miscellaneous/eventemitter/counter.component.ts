import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  styles: ['input {margin: 10px 10px 10px 0px;}'],
  template: `
    <div class="counter">
      <button (click)="decrement()">
        Decrement
      </button>

      <input type="text" [value]="count">

      <button (click)="increment()">
        Increment
      </button>
    </div>
  `
})
export class CounterComponent {
  @Input()
  count: number = 0;
  
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  
  increment() {
    this.count++;
    this.change.emit(this.count);
  }
  
  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
  
}

