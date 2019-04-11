import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  description: string;
}

@Component({
  selector: '',
  styles: ['li{ cursor:pointer; color: 	#F0BA36;} li:hover{ text-decoration: underline; }'],
  template: `
  <li *ngFor="let product of products" [class.selected]="product === selectedProduct" (click)=onSelect(product)>
	{{product.id}} {{product.description}}
</li>
  `,
}) export class RoutingParamComponent {
  selectedProduct: Product;

  products: Product[] = [
    { id: 1, description: "iPhone 7" },
    { id: 2, description: "Samsung 7" },
    { id: 3, description: "MS Lumina" }
  ];

  constructor(private _router: Router) { }

  onSelect(prod: Product): void {
    this.selectedProduct = prod;
    this._router.navigate(["/product", prod.id]);
  }
}