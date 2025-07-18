import { Component } from '@angular/core';
import { AppResizeTracker } from '../../directives/app-resize-tracker';
import { DisableComponent } from '../disable-component/disable-component';
import { AppToggleComponent } from '../app-toggle-component/app-toggle-component';
import { HighlightOnHoverComponent } from '../highlight-on-hover-component/highlight-on-hover-component';
import { CountdownTimerDisplay } from '../../countdown-timer-display/countdown-timer-display';
@Component({
  selector: 'app-element-resize-listener',
  imports: [
    AppResizeTracker,
    DisableComponent,

    HighlightOnHoverComponent,
    CountdownTimerDisplay,
    AppToggleComponent,
  ],
  templateUrl: './element-resize-listener.html',
  styleUrl: './element-resize-listener.css',
})
export class ElementResizeListener {}
