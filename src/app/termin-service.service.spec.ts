import { TestBed } from '@angular/core/testing';

import { TerminServiceService } from './termin-service.service';

describe('TerminServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminServiceService = TestBed.get(TerminServiceService);
    expect(service).toBeTruthy();
  });
});
