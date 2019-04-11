import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '',
  template: `<b>Product ID : {{productID}}</b>`,
  styles: ['b { color: #F0BA36; }']
})
export class RoutingParamDetailComponent implements OnInit {
  ngOnInit() { }

  productID: number;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(
      params => {
        this.productID = params['id']
        console.log(this.productID);
      }
    );
  }
}

