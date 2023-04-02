import { TestBed } from '@angular/core/testing';

import { UserPaymentService } from './user-payment.service';

describe('UserPaymentService', () => {
  let service: UserPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
