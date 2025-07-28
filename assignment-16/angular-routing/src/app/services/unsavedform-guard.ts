import { CanDeactivateFn } from '@angular/router';
import { ComponentCanDeactivate } from '../interfaces/component-can-deactivate';

export const unsavedformGuard: CanDeactivateFn<ComponentCanDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component && component.canDeactivate) {
    return component.canDeactivate();
  }
  return true;
};
