import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-model',
  imports: [NzButtonModule, NzModalModule],
  templateUrl: './model.html',
  styleUrl: './model.css',
})
export class Model {
  isVisible = false;

  private modalOpenSubject = new Subject<void>();
  private modalCloseSubject = new Subject<void>();
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.modalOpenSubject.pipe(takeUntil(this.destroy$)).subscribe(() => {
      console.log('Modal opened');
    });

    this.modalCloseSubject.pipe(takeUntil(this.destroy$)).subscribe(() => {
      console.log('Modal closed');
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  showModal(): void {
    this.isVisible = true;
    this.modalOpenSubject.next();
  }

  handleOk(): void {
    this.isVisible = false;
    this.modalCloseSubject.next();
  }

  handleCancel(): void {
    this.isVisible = false;
    this.modalCloseSubject.next();
  }
}
