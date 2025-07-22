import { Routes } from '@angular/router';
import { Task1 } from './components/task-1/task-1';
import { Task2 } from './components/task-2/task-2';
import { Task3 } from './components/task-3/task-3';
import { Task4 } from './components/task-4/task-4';
import { Task6 } from './components/task-6/task-6';
import { BonusTask } from './components/bonus-task/bonus-task';

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
];
