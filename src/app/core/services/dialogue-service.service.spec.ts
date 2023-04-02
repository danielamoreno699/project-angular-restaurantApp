import { TestBed } from '@angular/core/testing';

import { DialogueServiceService } from './dialogue-service.service';

describe('DialogueServiceService', () => {
  let service: DialogueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
