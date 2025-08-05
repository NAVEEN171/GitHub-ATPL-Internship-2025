import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSequence } from './number-sequence';

describe('NumberSequence', () => {
  let component: NumberSequence;
  let fixture: ComponentFixture<NumberSequence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberSequence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberSequence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
