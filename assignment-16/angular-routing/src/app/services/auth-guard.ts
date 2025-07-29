import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { RoleService } from './role-service';

export const authGuard: CanActivateFn = async (route, state) => {
  const currentRole = inject(RoleService);

  const router = inject(Router);
  let userRole = await currentRole.getRole().value;

  if (userRole !== 'admin') {
    return router.navigate(['/access-denied']);
  }
  return true;
};
