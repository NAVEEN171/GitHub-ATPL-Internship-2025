import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { Product } from '../../../models/products';
import { ProductService } from '../../../services/products';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem implements OnDestroy {
  @Input() productItem!: Product;
  isDeleting: boolean = false;
  deleteSubscription!: Subscription;

  constructor(private productservice: ProductService, private router: Router) {}

  editProduct(product: Product) {
    this.productservice.setProduct(product);
    this.router.navigate(['/form']);
  }

  deleteProduct(id: string) {
    this.isDeleting = true;
    this.deleteSubscription = this.productservice.deleteProduct(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.productservice.fetchProducts();
        this.isDeleting = false;
        this.productservice.setMessage(
          'success',
          ' Product Successfully Deleted!'
        );
      },
      error: (error: Error) => {
        console.log(error);
        this.isDeleting = false;
        this.productservice.setMessage('danger', ' Product Deletion Failed!');
      },
    });
  }
  ngOnDestroy(): void {
    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
  }
}
