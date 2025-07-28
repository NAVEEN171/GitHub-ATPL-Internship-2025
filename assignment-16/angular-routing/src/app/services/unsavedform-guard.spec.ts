import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { unsavedformGuard } from './unsavedform-guard';

describe('unsavedformGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unsavedformGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
