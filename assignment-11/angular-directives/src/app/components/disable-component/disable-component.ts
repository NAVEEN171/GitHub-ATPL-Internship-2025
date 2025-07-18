import { Component } from '@angular/core';
import { DisableBasedCondition } from '../../directives/disable-based-condition';

@Component({
  selector: 'app-disable-component',
  imports: [DisableBasedCondition],
  templateUrl: './disable-component.html',
  styleUrl: './disable-component.css',
})
export class DisableComponent {
  showButton = false;
}
