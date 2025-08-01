import { Routes } from '@angular/router';
import { Studentslist } from './components/task1/studentslist/studentslist';
import { DarkLightToggler } from './components/task-2/dark-light-toggler/dark-light-toggler';
import { LoginForm } from './components/task-3/login-form/login-form';
import { StudentslistParent } from './components/bonus-task/studentslist/studentslist';
export const routes: Routes = [
  {
    path: '',
    component: Studentslist,
  },
  {
    path: 'toggler',
    component: DarkLightToggler,
  },
  { path: 'login', component: LoginForm },
  { path: 'app', component: StudentslistParent },
];
