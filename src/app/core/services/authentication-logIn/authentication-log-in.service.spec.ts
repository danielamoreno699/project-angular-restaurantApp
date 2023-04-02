import { TestBed } from '@angular/core/testing';

import { AuthenticationLogInService } from './authentication-log-in.service';

describe('AuthenticationLogInService', () => {
  let service: AuthenticationLogInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationLogInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
