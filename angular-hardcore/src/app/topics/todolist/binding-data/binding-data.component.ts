import { Component, HostListener, Input, ElementRef, AfterViewInit, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: '',
  styleUrls: ['./style.css'],
  template:
  `
<hero-detail [hero]="selectedHero"></hero-detail>
<ul class="heroes">
  <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" 
  (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>

<button #btn1 (myClick)="showEventObject($event)">Emit 1</button>
<button #btn2>Emit 2</button>
  `
  ,
})
export class BindingDataComponent implements OnInit, AfterViewInit {
  @ViewChild('btn1') private btn1: ElementRef;
  @ViewChild('btn2') private btn2: ElementRef;
  @Output() onAdd = new EventEmitter<Object>();

  @Output("btn1") embtn1Click = new EventEmitter<void>();

  clickMessage: string;
  _object: {};
  showEventObject(event: any) {
    console.log(event);
    this.clickMessage = event;
  }
  ngAfterViewInit(): void {
    this.btn1.nativeElement.addEventListener('click', (event: Event) => {
      this.embtn1Click.emit(this.print(this.test1()));
    });

    this.btn2.nativeElement.addEventListener('click', (event: Event) => {
      this.embtn1Click.emit(this.print(this.test2()));
    })

    this.onAdd.emit(this._object = this.test1());
    console.log(this._object);

  }
  print(_object: {}) {
    console.log(_object);
  }
  test1() {
    return { id: "555", name: "Pob" };
  }
  test2() {
    return { id: "444", name: "Saeng" };
  }

  ngOnInit(): void { }
  heroes: Hero[];
  selectedHero: Hero;

  constructor() {
    this.heroes = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' }
    ];
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.dir(this.selectedHero);
  }
}
