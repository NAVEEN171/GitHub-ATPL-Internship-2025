import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  let userRole = 'admin';

  if (userRole !== 'admin') {
    return router.navigate(['access-denied']);
  }
  return true;
};
