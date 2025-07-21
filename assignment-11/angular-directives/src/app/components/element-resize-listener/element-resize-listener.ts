import { Component } from '@angular/core';
import { AppResizeTracker } from '../../directives/app-resize-tracker';

@Component({
  selector: 'app-element-resize-listener',
  imports: [AppResizeTracker],
  templateUrl: './element-resize-listener.html',
  styleUrl: './element-resize-listener.css',
})
export class ElementResizeListener {}
