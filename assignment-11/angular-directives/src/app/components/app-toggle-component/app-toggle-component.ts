import { Component } from '@angular/core';
import { AppToggle } from '../../directives/app-toggle';

@Component({
  selector: 'app-app-toggle-component',
  imports: [AppToggle],
  templateUrl: './app-toggle-component.html',
  styleUrl: './app-toggle-component.css',
})
export class AppToggleComponent {
  show = true;
}
