import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products';
import { Product } from '../../../models/products';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductItem } from '../product-item/product-item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductItem],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit, OnDestroy {
  products: Product[] = [];
  selectedProduct: null | Product = null;
  productsSubscription!: Subscription;

  constructor(private productservice: ProductService, private router: Router) {}

  editProduct(product: Product) {
    this.productservice.setProduct(product);
    this.router.navigate(['/form']);
  }
  addNewProduct() {
    this.productservice.setProduct(null);
    this.router.navigate(['/form']);
  }

  deleteProduct(id: string) {
    this.productservice.deleteProduct(id);
  }
  ngOnInit(): void {
    this.selectedProduct = this.productservice.selectedProduct;
    this.productservice.fetchProducts();
    this.productsSubscription = this.productservice.getProducts().subscribe({
      next: (data: Product[]) => {
        console.log(data);
        this.products = data;
      },
      error: (error: Error) => console.log(error),
    });
  }
  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
