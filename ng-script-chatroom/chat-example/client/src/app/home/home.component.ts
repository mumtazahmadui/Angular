import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  loadedCharacter: {};
  characterHomeworld: {};
  homeworld: {};
  character: {};
  domResult: any;

  constructor(private http: Http) {
    console.log("constructor do!");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit do!");
    this.domResult = document.getElementById('getData1');
  }

  ngOnInit() {
    let character = this.http.get('http://swapi.co/api/people/1').map(res => res.json());
    let characterHomeworld = this.http.get('http://swapi.co/api/planets/1').map(res => res.json());

    //--------- single request ---------
    character.subscribe(data => {
      this.character = data;
    });

    characterHomeworld.subscribe(data => {
      this.loadedCharacter = data;
    });


    // --------- multiple parallel requests ---------
    Observable.forkJoin([character, characterHomeworld]).subscribe(results => {
      this.character = results[0];
      this.characterHomeworld = results[1];

      let _data = this.characterHomeworld["films"];
      
      let str = '';
      for(let i=0; i<_data.length; i++){
        str += _data[i] +'<br/>';
      }
      this.domResult.innerHTML = str;
      
    });


  }

  getData1() {
    let character = this.http.get('http://swapi.co/api/people/1').map(res => res.json());
    character.subscribe(data => {
      this.character = data;
    });
  }

} 