import { TestBed } from '@angular/core/testing';

import { ApiServiceGeneric } from './api-service-generic';

describe('ApiServiceGeneric', () => {
  let service: ApiServiceGeneric;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceGeneric);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
