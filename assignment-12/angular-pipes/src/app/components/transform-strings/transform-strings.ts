import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transform-strings',
  imports: [CommonModule],
  templateUrl: './transform-strings.html',
  styleUrl: './transform-strings.scss',
})
export class TransformStrings {
  name = 'john deo';
}
