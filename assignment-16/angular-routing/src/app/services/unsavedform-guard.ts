import { CanDeactivateFn } from '@angular/router';

export const unsavedformGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
