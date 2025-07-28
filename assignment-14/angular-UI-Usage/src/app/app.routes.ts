import { Routes } from '@angular/router';
import { TestButton } from './components/test-button/test-button';
import { LoginForm } from './components/login-form/login-form';
import { ToolSideNav } from './components/tool-side-nav/tool-side-nav';
import { FormDialog } from './components/form-dialog/form-dialog';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Dashboard } from './components/dashboard/dashboard';
import { DashBoardPage } from './components/dash-board-page/dash-board-page';

export const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginForm,
  },
  {
    path: 'navbar',
    component: ToolSideNav,
    children: [
      { path: 'home', component: Home },
      { path: 'profile', component: Profile },
    ],
  },
  {
    path: 'dialog-demo',
    component: FormDialog,
  },
  {
    path: 'Dashboard',
    component: DashBoardPage,
    children: [
      {
        path: '',
        component: Dashboard,
      },
      { path: 'login', component: LoginForm },
      { path: 'dialog-demo', component: FormDialog },
      { path: 'welcome', component: TestButton },
    ],
  },
];
