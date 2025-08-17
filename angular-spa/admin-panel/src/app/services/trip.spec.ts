import { TestBed } from '@angular/core/testing';

import { Trip } from './trip.component';

describe('Trip', () => {
  let service: Trip;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Trip);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
