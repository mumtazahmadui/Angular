import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-app',
  styles: [
`
li { color:blue; }
li:hover { color: #36F088; cursor: pointer; }
b { color: red; }
`
  ],
  template:
  `
<ul>
  <b>Tip & Trick</b>
  <li routerLink=''>Welcome</li>
  <li routerLink='validation'>Reactive Form Validation</li>
  <li routerLink='routing-param'>Router Param</li>
  <li routerLink='eventemitter'>Event Emitter (1)</li>
  <li routerLink='dialog-animation'>Modal Dialog Animation Data</li>
  <br/>
  <b>To do list</b>
  <li routerLink='multiform'>Add/Remove Multiple Form Fields</li>
  <li routerLink='binding-data'>Binding Data</li>
</ul>
`
  ,
}) export class SidebarComponent { }