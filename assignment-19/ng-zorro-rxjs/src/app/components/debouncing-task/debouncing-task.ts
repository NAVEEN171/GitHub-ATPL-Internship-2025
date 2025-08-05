import {
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, fromEvent, map, pipe } from 'rxjs';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-debouncing-task',
  imports: [FormsModule, NzButtonModule, NzIconModule, NzInputModule],
  templateUrl: './debouncing-task.html',
  styleUrl: './debouncing-task.css',
})
export class DebouncingTask {
  @ViewChild('inputElement') inputEle!: ElementRef<HTMLInputElement>;

  searchTermChanges = fromEvent(this.inputEle.nativeElement, 'input').pipe(
    map((event: any) => event.target.value),
    debounceTime(3000)
  );
  search = this.searchTermChanges.subscribe((data) => console.log(data));
}
