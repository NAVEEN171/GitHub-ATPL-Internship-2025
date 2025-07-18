import { Component } from '@angular/core';
import { CountDown } from '../directives/count-down';

@Component({
  selector: 'app-countdown-timer-display',
  imports: [CountDown],
  templateUrl: './countdown-timer-display.html',
  styleUrl: './countdown-timer-display.css',
})
export class CountdownTimerDisplay {}
