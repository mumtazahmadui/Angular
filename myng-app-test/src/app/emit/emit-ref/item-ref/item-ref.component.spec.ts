import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRefComponent } from './item-ref.component';

describe('ItemRefComponent', () => {
  let component: ItemRefComponent;
  let fixture: ComponentFixture<ItemRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
