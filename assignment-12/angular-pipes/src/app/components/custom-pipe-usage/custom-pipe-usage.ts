import { Component } from '@angular/core';
import { CustomPipePipe } from '../../pipes/custom-pipe-pipe';

@Component({
  selector: 'app-custom-pipe-usage',
  imports: [CustomPipePipe],
  templateUrl: './custom-pipe-usage.html',
  styleUrl: './custom-pipe-usage.scss',
})
export class CustomPipeUsage {
  value = 100;
}
