import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  productList = [
    {
      name: 'samsung galaxy M05',
      imageUrl:
        'https://m.media-amazon.com/images/I/81T3olLXpUL._AC._SR360,460.jpg',
      price: 20000,
    },
    {
      name: 'IQOO Z10x 5G',
      imageUrl:
        'https://m.media-amazon.com/images/I/61BupubdJqL._AC._SR360,460.jpg',
      price: 22000,
    },
  ];
}
