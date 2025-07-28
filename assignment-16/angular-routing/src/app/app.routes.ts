import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { AccessDenied } from './components/access-denied/access-denied';
import { authGuard } from './services/auth-guard';
import { UserProfile } from './components/user-profile/user-profile';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'admin', component: Admin, canActivate: [authGuard] },
  { path: 'access-denied', component: AccessDenied },
  { path: 'user-profile', component: UserProfile },
];
