import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { Product } from '../models/products';
import { ProductForm } from '../models/products';
import { Router } from '@angular/router';
import { Popup } from '../models/products';
import { PopupActions } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private PRODUCTS_API = 'http://localhost:3000';
  private productsList$ = new BehaviorSubject<Product[]>([]);
  selectedProduct: Product | null = null;
  isLoading = new BehaviorSubject<boolean>(false);
  initialData = {
    action: PopupActions.NONE,
    message: '',
  };
  popupDetails = new BehaviorSubject<Popup>(this.initialData);

  clearMessage() {
    this.popupDetails.next(this.initialData);
  }
  waitAndClearMessage() {
    setTimeout(() => {
      this.clearMessage();
    }, 4000);
  }

  setMessage(type: string, message: string) {
    if (this.popupDetails.value.action) {
      this.clearMessage();
    }
    if (type === 'success') {
      this.popupDetails.next({
        action: PopupActions.SUCCESS,
        message,
      });
      this.waitAndClearMessage();
    } else if ((type = 'danger')) {
      this.popupDetails.next({
        action: PopupActions.ERROR,
        message,
      });
      this.waitAndClearMessage();
    }
  }

  constructor(private _http: HttpClient, private router: Router) {}

  setProduct(tempProduct: Product | null) {
    this.selectedProduct = tempProduct;
  }

  uploadOrInsertProduct(formData: ProductForm) {
    this.isLoading.next(true);
    if (!this.selectedProduct) {
      this._http
        .post(`${this.PRODUCTS_API}/products`, formData)
        .pipe(
          finalize(() => {
            this.isLoading.next(false);
            this.router.navigate(['/']);
          })
        )
        .subscribe({
          next: () => {
            this.fetchProducts();

            this.setMessage('success', 'New Product Successfully added');
          },
          error: (error) => {
            console.log(error);
            this.setMessage('danger', 'Product Additon Failed!');
          },
        });
    } else {
      this._http
        .put(
          `${this.PRODUCTS_API}/products/${this.selectedProduct.id}`,
          formData
        )
        .pipe(
          finalize(() => {
            this.isLoading.next(false);
            this.router.navigate(['/']);
          })
        )
        .subscribe({
          next: () => {
            this.fetchProducts();
            this.setMessage('success', ' Product Successfully updated');
          },
          error: (error) => {
            console.log(error);
            this.setMessage('danger', 'Product Updation Failed!');
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
        },
      });
  }

  getProducts() {
    return this.productsList$;
  }

  deleteProduct(id: string): Observable<object> {
    return this._http.delete(`${this.PRODUCTS_API}/products/${id}`);
  }
}
