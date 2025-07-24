import { Routes } from '@angular/router';
import { TestButton } from './components/test-button/test-button';
import { LoginForm } from './components/login-form/login-form';
import { ToolSideNav } from './components/tool-side-nav/tool-side-nav';
import { FormDialog } from './components/form-dialog/form-dialog';

export const routes: Routes = [
  { path: '', component: TestButton },
  {
    path: 'login',
    component: LoginForm,
  },
  {
    path: 'navbar',
    component: ToolSideNav,
  },
  {
    path: 'dialog-demo',
    component: FormDialog,
  },
];
