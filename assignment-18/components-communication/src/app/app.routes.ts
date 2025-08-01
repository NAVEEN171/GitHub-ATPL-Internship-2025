import { Routes } from '@angular/router';
import { Studentslist } from './components/task1/studentslist/studentslist';
import { DarkLightToggler } from './components/task1/dark-light-toggler/dark-light-toggler';
import { LoginForm } from './components/task1/login-form/login-form';
import { StudentslistParent } from './components/task-5/studentslist/studentslist';
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
