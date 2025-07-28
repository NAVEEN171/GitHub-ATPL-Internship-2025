import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  productId: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
