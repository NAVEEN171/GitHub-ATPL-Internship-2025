import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqQuestion } from './faq-question';

describe('FaqQuestion', () => {
  let component: FaqQuestion;
  let fixture: ComponentFixture<FaqQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqQuestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
