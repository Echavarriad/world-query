import { TestBed } from '@angular/core/testing';

import { ApistateService } from './apistate.service';

describe('ApistateService', () => {
  let service: ApistateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApistateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
