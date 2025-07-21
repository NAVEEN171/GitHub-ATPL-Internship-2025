import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-prices',
  imports: [CommonModule],
  templateUrl: './sort-prices.html',
  styleUrl: './sort-prices.scss',
})
export class SortPrices {
  itemPrices: number[] = [3, 20, 4, 12, 34, 56, 95, 100];

  SortedArray: number[] = [...this.itemPrices].sort((a, b) => b - a);
}
