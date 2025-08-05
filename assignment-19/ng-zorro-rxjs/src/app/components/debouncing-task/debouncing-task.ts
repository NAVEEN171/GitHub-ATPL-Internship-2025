import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, fromEvent, map, pipe, tap } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-debouncing-task',
  imports: [FormsModule, NzButtonModule, NzIconModule, NzInputModule],
  templateUrl: './debouncing-task.html',
  styleUrl: './debouncing-task.css',
})
export class DebouncingTask implements AfterViewInit {
  @ViewChild('inputElement') inputEle!: ElementRef<HTMLInputElement>;
  ngAfterViewInit(): void {
    const searchTermChanges = fromEvent(
      this.inputEle.nativeElement,
      'input'
    ).pipe(
      map((event: Event) => {
        return (event.target as HTMLInputElement).value;
      }),
      debounceTime(3000)
    );
    const search = searchTermChanges.subscribe((data) => console.log(data));
  }
}
