import { Component, OnInit } from '@angular/core';
import { ProductsServiceGeneric } from '../../../services/products-service';
import { Product } from '../../../models/products';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productsList: Product[] = [];

  constructor(
    private ProductsServiceGeneric: ProductsServiceGeneric,
    private router: Router
  ) {}

  getProducts() {
    this.ProductsServiceGeneric.getAll().subscribe((data) => {
      this.productsList = data;
      console.log(data);
    });
  }
  goToProduct(id: number) {
    console.log(id);
    this.router.navigate(['/products', id]);
  }
  ngOnInit(): void {
    this.getProducts();
  }
}
