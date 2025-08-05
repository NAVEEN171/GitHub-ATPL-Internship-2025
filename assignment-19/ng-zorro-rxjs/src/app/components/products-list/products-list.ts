import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, mergeMap, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [NzListModule, NzTypographyModule, CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {
  productsItems: any[] = [];
  fetchedProducts: any[] = [];
  private productFetching = new Subject<number>();
  constructor(private _http: HttpClient) {}
  fetchProduct(productNo: number) {
    return this._http.get(`https://dummyjson.com/products/${productNo}`);
  }
  ngOnInit(): void {
    this._http
      .get<any>('https://dummyjson.com/products')
      .subscribe((data: any) => {
        this.productsItems = data.products ?? [];
      });

    this.productFetching
      .pipe(mergeMap((productId: number) => this.fetchProduct(productId)))
      .subscribe((data) => {
        this.fetchedProducts.push(data);
      });
  }
  fetchSpecificProduct(productNo: number) {
    this.productFetching.next(productNo);
  }
}
