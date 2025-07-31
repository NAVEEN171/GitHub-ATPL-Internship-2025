import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products-service';
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
    private productsService: ProductsService,
    private router: Router
  ) {}

  getProducts() {
    this.productsService.getAll().subscribe((data) => {
      this.productsList = data;
      console.log(data);
    });
  }
  goToProduct(id: string) {
    this.router.navigate(['/products', id]);
  }
  ngOnInit(): void {
    this.getProducts();
  }
}
