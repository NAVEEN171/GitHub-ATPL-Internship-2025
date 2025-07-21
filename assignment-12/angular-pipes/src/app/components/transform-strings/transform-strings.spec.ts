import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformStrings } from './transform-strings';

describe('TransformStrings', () => {
  let component: TransformStrings;
  let fixture: ComponentFixture<TransformStrings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformStrings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformStrings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
