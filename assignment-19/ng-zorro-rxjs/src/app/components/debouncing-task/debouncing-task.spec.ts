import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncingTask } from './debouncing-task';

describe('DebouncingTask', () => {
  let component: DebouncingTask;
  let fixture: ComponentFixture<DebouncingTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebouncingTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebouncingTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
