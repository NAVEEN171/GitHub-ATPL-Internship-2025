import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightOnHoverComponent } from './highlight-on-hover-component';

describe('HighlightOnHoverComponent', () => {
  let component: HighlightOnHoverComponent;
  let fixture: ComponentFixture<HighlightOnHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightOnHoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
