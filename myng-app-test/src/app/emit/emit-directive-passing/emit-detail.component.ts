import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emit-detail',
  template: `
  <div *ngFor="let item of iprofile">
    {{item.id}}, {{item.fullname}}, {{item.age}}
  </div>
  `
})
export class EmitDetailTodoComponent implements OnInit {
  @Input() iprofile: any;
  @Input() findItem: any;
  @Output() onEmitSelected: EventEmitter<any> = new EventEmitter();
  
  ngOnInit() {
    let rs = this.iprofile.find(x => x.id === this.findItem.id);

    if (typeof rs !== 'undefined') {
      this.onEmitSelected.emit({ row: rs, success: true });
    } else {
      this.onEmitSelected.emit({ success: false, error: 'Not fond value!' });
    }

  }

}

