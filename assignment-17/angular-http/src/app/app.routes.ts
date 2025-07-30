import { Routes } from '@angular/router';
import { ProductForm } from './components/product-form/product-form';
import { ProductsList } from './components/products-list/products-list';

export const routes: Routes = [
  {
    path: 'form',
    component: ProductForm,
  },
  { path: '', component: ProductsList },
];
