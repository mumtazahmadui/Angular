import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRefComponent } from './cart-ref.component';

describe('CartRefComponent', () => {
  let component: CartRefComponent;
  let fixture: ComponentFixture<CartRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
