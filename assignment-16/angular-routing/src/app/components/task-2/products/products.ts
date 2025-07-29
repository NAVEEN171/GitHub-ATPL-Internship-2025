import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productsList = [
    {
      id: 1,
      name: 'Laptop Mag',
      price: 67000,
      image: 'https://cdn.mos.cms.futurecdn.net/Gw3Se82bvppoJsHc4rCVsQ.jpg',
    },
    {
      id: 2,
      name: 'One Plus',
      price: 50000,
      image:
        'https://5.imimg.com/data5/SELLER/Default/2023/8/337487291/EC/WR/UP/189620676/oneplus-nord-ce-3-5g.jpg',
    },
    {
      id: 3,
      name: 'Teddy Bear',
      price: 1000,
      image:
        'https://images.meesho.com/images/products/471995889/ukrud_512.jpg',
    },
  ];
}
