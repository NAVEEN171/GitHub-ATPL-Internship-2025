import { Routes } from '@angular/router';
import { Task1 } from './components/template-driven-forms/task-1/task-1';
import { Task2 } from './components/template-driven-forms/task-2/task-2';
import { Task3 } from './components/template-driven-forms/task-3/task-3';
import { Task4 } from './components/template-driven-forms/task-4/task-4';
import { Task6 } from './components/template-driven-forms/task-6/task-6';
import { BonusTask } from './components/template-driven-forms/bonus-task/bonus-task';
import { PasswordConfirmValidator } from './components/reactive-forms/password-confirm-validator/password-confirm-validator';
import { BasicReactiveForm } from './components/reactive-forms/basic-reactive-form/basic-reactive-form';
import { NestedForm } from './components/reactive-forms/nested-form/nested-form';
import { DynamicPhoneForm } from './components/reactive-forms/dynamic-phone-form/dynamic-phone-form';

export const routes: Routes = [
  {
    path: '',
    component: Task1,
  },
  {
    path: 'task-2',
    component: Task2,
  },
  {
    path: 'task-3',
    component: Task3,
  },
  {
    path: 'task-4',
    component: Task4,
  },
  {
    path: 'task-6',
    component: Task6,
  },
  {
    path: 'task-7',
    component: BonusTask,
  },
  {
    path: 'password',
    component: PasswordConfirmValidator,
  },
  {
    path: 'basic-form',
    component: BasicReactiveForm,
  },
  {
    path: 'nested-form',
    component: NestedForm,
  },
  {
    path: 'dynamic-phone',
    component: DynamicPhoneForm,
  },
];
