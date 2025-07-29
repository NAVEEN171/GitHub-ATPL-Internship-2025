import { Routes } from '@angular/router';
import { Admin } from './components/task-4/admin/admin';
import { Home } from './components/task-6/home/home';
import { AccessDenied } from './components/task-4/access-denied/access-denied';
import { authGuard } from './services/auth-guard';
import { UserProfile } from './components/task-4/user-profile/user-profile';
import { unsavedformGuard } from './services/unsavedform-guard';
import { NotFound } from './components/task-6/not-found/not-found';
import { About } from './components/task-1/about/about';
import { Contact } from './components/task-1/contact/contact';
import { ProductDetail } from './components/task-2/product-detail/product-detail';
import { UserDetails } from './components/task-5/user-details/user-details';
import { AdminList } from './components/task-5/admin-list/admin-list';
import { Dashboard } from './components/task-3/dashboard/dashboard';
import { Settings } from './components/task-3/settings/settings';
import { Profile } from './components/task-3/profile/profile';
import { Activity } from './components/task-3/activity/activity';
import { Products } from './components/task-2/products/products';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { path: 'admin', component: Admin, canActivate: [authGuard] },
  { path: 'access-denied', component: AccessDenied },
  { path: 'products/:id', component: ProductDetail },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        component: Activity,
      },
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'settings',
        component: Settings,
      },
    ],
  },
  { path: 'products', component: Products },
  {
    path: 'user-profile',
    component: UserProfile,
    canDeactivate: [unsavedformGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user-module/user-module-module').then(
        (m) => m.UserModuleModule
      ),
  },
  {
    path: 'admin-access',
    loadChildren: () =>
      import('./modules/admin-module/admin-module-module').then(
        (m) => m.AdminModuleModule
      ),
  },
  {
    path: '**',
    component: NotFound,
  },
];
