import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSeePaymentComponent } from './dialog-see-payment.component';

describe('DialogSeePaymentComponent', () => {
  let component: DialogSeePaymentComponent;
  let fixture: ComponentFixture<DialogSeePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSeePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
