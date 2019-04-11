import { Component, HostListener, Input, ElementRef, AfterViewInit, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('btn1') private btn1: ElementRef;
  @ViewChild('btn2') private btn2: ElementRef;
  @Output() onAdd = new EventEmitter<Object>();

  @Output("btn1") emBtnClick = new EventEmitter<void>();

  clickMessage: string;
  _object: {};

  showEventObject(event: any) {
    this.clickMessage = event;
    console.log(this.clickMessage);
  }
  ngAfterViewInit(): void {
    this.btn1.nativeElement.addEventListener('click', (event: Event) => {
      this.emBtnClick.emit(
        this.getShow(this.getItem())
      );
    });

    this.btn2.nativeElement.addEventListener('click', (event: Event) => {
      this.emBtnClick.emit(this.print(this.getItem()));
    })

    this.onAdd.emit(this._object = this.getItem());
    console.log(this._object);

  }
  print(_object: {}) {
    console.log(_object);
  }
  getShow(item) {
    alert(JSON.stringify(item));
  }
  getItem() {
    return { id: "555", name: "Pob" };
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
  }
}
