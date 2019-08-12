import { TestBed } from '@angular/core/testing';

import { RxTrackerService } from './rx-tracker.service';

describe('RxTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxTrackerService = TestBed.get(RxTrackerService);
    expect(service).toBeTruthy();
  });
});
