import { TestBed } from '@angular/core/testing';

import { EntrydataService } from './entrydata.service';

describe('EntrydataService', () => {
  let service: EntrydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
