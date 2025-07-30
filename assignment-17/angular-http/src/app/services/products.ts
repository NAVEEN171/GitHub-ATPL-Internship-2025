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
  deletingProduct: boolean = false;
  private PRODUCTS_API = 'https://cadfb646b95505f240a5.free.beeceptor.com/api';

  constructor(private _http: HttpClient) {}

  setProduct(tempProduct: Product | null) {
    this.selectedProduct = tempProduct;
  }

  uploadOrInsertProduct(formData: ProductForm) {
    if (!this.selectedProduct) {
      this._http.post(`${this.PRODUCTS_API}/products`, formData).subscribe({
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
          `${this.PRODUCTS_API}/products/${this.selectedProduct.id}`,
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
      .get<Product[]>(`${this.PRODUCTS_API}/products`)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe({
        next: (data) => {
          this.productsList$.next(data);
          if (this.deletingProduct) {
            this.deletingProduct = false;
          }
        },
      });
  }
  getProducts() {
    return this.productsList$;
  }
  deleteProduct(id: string) {
    this.deletingProduct = true;
    this._http.delete(`${this.PRODUCTS_API}/products/${id}`).subscribe({
      next: () => {
        this.fetchProducts();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
