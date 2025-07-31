import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products';
import { Subscription } from 'rxjs';
import { Popup } from '../../../models/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-shower',
  imports: [CommonModule],
  templateUrl: './message-shower.html',
  styleUrl: './message-shower.css',
})
export class MessageShower implements OnInit {
  message!: Popup;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.popupDetails.subscribe((data) => {
      this.message = data;
      console.log(data);
    });
  }
}
