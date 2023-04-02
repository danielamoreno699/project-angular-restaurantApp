import { TestBed } from '@angular/core/testing';

import { PaymentServiceService } from './payment-service.service';

describe('PaymentServiceService', () => {
  let service: PaymentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
