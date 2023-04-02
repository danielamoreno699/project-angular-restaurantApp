import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlaceOrderComponent } from './dialog-place-order.component';

describe('DialogPlaceOrderComponent', () => {
  let component: DialogPlaceOrderComponent;
  let fixture: ComponentFixture<DialogPlaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPlaceOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
