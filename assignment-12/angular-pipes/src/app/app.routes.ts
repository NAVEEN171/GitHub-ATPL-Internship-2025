import { Routes } from '@angular/router';
import { SortPrices } from './components/sort-prices/sort-prices';
import { FilteredUserData } from './components/filtered-user-data/filtered-user-data';
import { NewsHeadlines } from './components/news-headlines/news-headlines';
import { ProductList } from './components/product-list/product-list';
import { EmployeeJoiningDates } from './components/employee-joining-dates/employee-joining-dates';
import { TransformStrings } from './components/transform-strings/transform-strings';
import { CustomPipeUsage } from './components/custom-pipe-usage/custom-pipe-usage';
export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'filtered-user-data',
    component: FilteredUserData,
  },
  {
    path: 'news',
    component: NewsHeadlines,
  },
  {
    path: 'sort-prices',
    component: SortPrices,
  },
  {
    path: 'employees',
    component: EmployeeJoiningDates,
  },
  {
    path: 'transform-strings',
    component: TransformStrings,
  },
  {
    path: 'custom-pipe-demonstration',
    component: CustomPipeUsage,
  },
];
