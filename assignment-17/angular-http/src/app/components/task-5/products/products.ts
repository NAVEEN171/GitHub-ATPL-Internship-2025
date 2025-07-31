import { Component, OnInit } from '@angular/core';
import { ProductsGenericService } from '../../../services/products-service';
import { Product } from '../../../models/products';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productsList: Product[] = [];

  constructor(
    private ProductsGenericService: ProductsGenericService,
    private router: Router
  ) {}

  getProducts() {
    this.ProductsGenericService.getAll().subscribe((data) => {
      this.productsList = data;
    });
  }
  goToProduct(id: number) {
    console.log(id);
    this.router.navigate(['/products', id]);
  }

  deleteProduct(id: number) {
    this.ProductsGenericService.delete(id).subscribe(() => {
      this.getProducts();
    });
  }
  ngOnInit(): void {
    this.getProducts();
  }
}
