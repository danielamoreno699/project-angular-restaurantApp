import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrder2Component } from './cart-order2.component';

describe('CartOrder2Component', () => {
  let component: CartOrder2Component;
  let fixture: ComponentFixture<CartOrder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOrder2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
