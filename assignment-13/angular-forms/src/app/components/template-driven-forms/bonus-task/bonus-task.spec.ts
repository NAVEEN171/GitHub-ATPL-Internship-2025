import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusTask } from './bonus-task';

describe('BonusTask', () => {
  let component: BonusTask;
  let fixture: ComponentFixture<BonusTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonusTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
