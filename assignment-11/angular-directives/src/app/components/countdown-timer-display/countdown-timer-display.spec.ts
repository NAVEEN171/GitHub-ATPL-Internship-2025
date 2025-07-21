import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerDisplay } from './countdown-timer-display';

describe('CountdownTimerDisplay', () => {
  let component: CountdownTimerDisplay;
  let fixture: ComponentFixture<CountdownTimerDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownTimerDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownTimerDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
