
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  styles: ['input { margin: 10px 10px 10px 0px;'],
  template: `
    <div *ngIf="hero">
      <div>
        ID: <input [(ngModel)]="hero.id" disabled/>
      </div>
      <div>
        Name: <input [(ngModel)]="hero.name"/>
      </div>
    </div>
  `
})
export class BindingDataDetailComponent {
  @Input() hero: Hero;
}

