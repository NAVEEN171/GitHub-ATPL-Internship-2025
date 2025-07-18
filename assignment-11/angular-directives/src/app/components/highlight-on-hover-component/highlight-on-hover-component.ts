import { Component } from '@angular/core';
import { HighlightOnHover } from '../../directives/highlight-on-hover';

@Component({
  selector: 'app-highlight-on-hover-component',
  imports: [HighlightOnHover],
  templateUrl: './highlight-on-hover-component.html',
  styleUrl: './highlight-on-hover-component.css',
})
export class HighlightOnHoverComponent {}
