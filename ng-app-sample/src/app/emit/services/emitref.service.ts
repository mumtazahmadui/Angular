import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EmitrefService {

  constructor() { 
  }

  private _onMyEvent = new Subject<any>();

  public get onMyEvent(): Observable<any> {
    return this._onMyEvent.asObservable();
  }

  public trigger(value: {}) {
    this._onMyEvent.next(value);
  }

}
