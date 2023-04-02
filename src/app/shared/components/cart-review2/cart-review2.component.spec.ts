import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartReview2Component } from './cart-review2.component';

describe('CartReview2Component', () => {
  let component: CartReview2Component;
  let fixture: ComponentFixture<CartReview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartReview2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartReview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
