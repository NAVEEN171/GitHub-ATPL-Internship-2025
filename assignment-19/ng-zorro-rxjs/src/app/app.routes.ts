import { Routes } from '@angular/router';
import { DebouncingTask } from './components/debouncing-task/debouncing-task';
import { NumberSequence } from './components/number-sequence/number-sequence';
import { NgTable } from './components/ng-table/ng-table';
import { Model } from './components/model/model';
import { ProductsList } from './components/products-list/products-list';
import { DarkLightTheme } from './components/dark-light-theme/dark-light-theme';

export const routes: Routes = [
  { path: '', component: DebouncingTask },
  {
    path: 'number-sequence',
    component: NumberSequence,
  },
  {
    path: 'table',
    component: NgTable,
  },
  {
    path: 'model',
    component: Model,
  },
  {
    path: 'products',
    component: ProductsList,
  },
  {
    path: 'toggle-theme',
    component: DarkLightTheme,
  },
];
