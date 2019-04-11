import { Component } from '@angular/core';

@Component({
  selector: 'header-app',
  template:
  `
<a routerLink=''>Home</a>
<a routerLink=''>News</a>
<a routerLink=''>Contact</a>
<a routerLink=''>About</a>
  `,
}) export class HeaderComponent { }