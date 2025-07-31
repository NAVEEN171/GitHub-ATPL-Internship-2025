import { Routes } from '@angular/router';
import { ProductForm } from './components/task-1/product-form/product-form';
import { ProductsList } from './components/task-1/products-list/products-list';
import { Task2 } from './components/task-2/task-2';
import { LoginForm } from './components/task-4/login-form/login-form';
import { Products } from './components/task-5/products/products';
import { Productsform } from './components/task-5/productsform/productsform';

export const routes: Routes = [
  {
    path: 'form',
    component: ProductForm,
  },
  { path: '', component: ProductsList },
  { path: 'simulate-error', component: Task2 },
  { path: 'login', component: LoginForm },
  { path: 'products', component: Products },
  { path: 'Productsform/:id', component: Productsform },
];
