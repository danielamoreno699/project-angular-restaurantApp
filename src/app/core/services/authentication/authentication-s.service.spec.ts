import { TestBed } from '@angular/core/testing';

import { AuthenticationSService } from './authentication-s.service';

describe('AuthenticationSService', () => {
  let service: AuthenticationSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
