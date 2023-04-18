import { TestBed } from '@angular/core/testing';

import { ApicitysService } from './apicitys.service';

describe('ApicitysService', () => {
  let service: ApicitysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicitysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
