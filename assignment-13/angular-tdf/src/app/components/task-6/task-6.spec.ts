import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6 } from './task-6';

describe('Task6', () => {
  let component: Task6;
  let fixture: ComponentFixture<Task6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
