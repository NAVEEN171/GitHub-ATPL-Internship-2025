import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscription, map, pipe, take, timer } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-number-sequence',
  imports: [CommonModule, NzButtonModule],
  templateUrl: './number-sequence.html',
  styleUrl: './number-sequence.css',
})
export class NumberSequence {
  numbers: number[] = [1, 2, 3, 4, 5];
  doubledNumbers: number[] = [];
  doubleSubscription!: Subscription;

  generateSequence() {
    if (this.doubleSubscription) {
      this.doubleSubscription.unsubscribe();
    }
    this.doubleSubscription = timer(0, 1000)
      .pipe(
        take(this.numbers.length),
        map((index) => {
          return this.numbers[index];
        }),
        map((num) => num * 2)
      )
      .subscribe({
        next: (squaredNumber) => {
          this.doubledNumbers.push(squaredNumber);
        },
      });
  }
}
