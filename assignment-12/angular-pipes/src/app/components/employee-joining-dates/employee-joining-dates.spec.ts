import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJoiningDates } from './employee-joining-dates';

describe('EmployeeJoiningDates', () => {
  let component: EmployeeJoiningDates;
  let fixture: ComponentFixture<EmployeeJoiningDates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeJoiningDates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeJoiningDates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
