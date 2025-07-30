import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { Product } from '../models/products';
import { ProductForm } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsList$ = new BehaviorSubject<Product[]>([]);
  selectedProduct: Product | null = null;

  constructor(private _http: HttpClient) {}

  setProduct(tempProduct: Product | null) {
    this.selectedProduct = tempProduct;
  }

  uploadOrInsertProduct(formData: ProductForm) {
    if (!this.selectedProduct) {
      this._http
        .post(
          'https://cadfb646b95505f240a5.free.beeceptor.com/api/products',
          formData
        )
        .subscribe({
          next: () => {
            this.fetchProducts();
          },
          error: (error) => {
            console.log(error);
          },
        });
    } else {
      this._http
        .put(
          `https://cadfb646b95505f240a5.free.beeceptor.com/api/products/${this.selectedProduct.id}`,
          formData
        )
        .subscribe({
          next: () => {
            this.fetchProducts();
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }

  fetchProducts() {
    return this._http
      .get<Product[]>(
        'https://cadfb646b95505f240a5.free.beeceptor.com/api/products'
      )
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe({
        next: (data) => {
          this.productsList$.next(data);
        },
      });
  }
  getProducts() {
    return this.productsList$;
  }
  deleteProduct(id: string) {
    this._http
      .delete(
        `https://cadfb646b95505f240a5.free.beeceptor.com/api/products/${id}`
      )
      .subscribe({
        next: () => {
          this.fetchProducts();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
