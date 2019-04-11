import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: '',
  templateUrl: './user.component.html',
  styles: [
    `.group-control { border:1px solid #E5E7E9; padding: 10px; margin-bottom: 10px; }
     .msg-color { color: red; cursor:pointer;}
    `
  ]
})
export class UserComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      users: this._fb.array([])
    });
    this.addUser();
  }

  initUser() {
    return this._fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  addUser() {
    const control = <FormArray>this.myForm.controls['users'];
    control.push(this.initUser());
  }

  removeUser(i: number) {
    const control = <FormArray>this.myForm.controls['users'];
    control.removeAt(i);
  }

  save(model) {
    alert(JSON.stringify(model));
  }
}
