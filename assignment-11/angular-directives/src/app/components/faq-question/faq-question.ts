import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleQuestion } from '../../interfaces/single-question';
import { HighlightOnHover } from '../../directives/highlight-on-hover';

@Component({
  selector: 'app-faq-question',
  imports: [CommonModule, HighlightOnHover],
  templateUrl: './faq-question.html',
  styleUrl: './faq-question.css',
})
export class FaqQuestion {
  showAnswer = false;
  @Input() Role: string = '';
  @Input() questionData: SingleQuestion | null = null;
  @Input() Idx: number = 0;
  getOptionLetter(index: number): string {
    return String.fromCharCode(97 + index);
  }
}
