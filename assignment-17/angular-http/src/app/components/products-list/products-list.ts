import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products';
import { Product } from '../../models/products';
import { CommonModule } from '@angular/common';
import { Router, RouteReuseStrategy, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {
  products: Product[] = [];
  selectedProduct: null | Product = null;

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
    this.productservice.getProducts().subscribe({
      next: (data: Product[]) => {
        console.log(data);
        this.products = data;
      },
      error: (error: Error) => console.log(error),
    });
  }
}
