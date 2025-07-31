import { Injectable } from '@angular/core';
import { ApiServiceGeneric } from './api-service-generic';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsGenericService extends ApiServiceGeneric<Product> {
  constructor(_http: HttpClient) {
    super(_http, 'http://localhost:3000/Products');
  }
}
