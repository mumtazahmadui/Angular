import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">

      <div>ID: {{hero.id}}</div>

      <div>
        Name: <input [(ngModel)]="hero.name"/>
      </div>

    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}

