import { TestBed } from '@angular/core/testing';

import { FlipkartToggle } from './flipkart-toggle';

describe('FlipkartToggle', () => {
  let service: FlipkartToggle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartToggle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
