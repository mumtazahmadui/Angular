import { Component } from '@angular/core';

@Component({
  selector: '',
  template:
  `
<button (click)="showDialog = !showDialog" class="btn">Open Dialog</button>

<app-dialog [(visible)]="showDialog">

  <div class="modal-content">
    <p>Mr.Kraipob Saengkhunthod</p>
  </div>

  <button (click)="showDialog = !showDialog" class="btn">Close</button>
</app-dialog>
`,
})
export class DialogAppComponent  { }
