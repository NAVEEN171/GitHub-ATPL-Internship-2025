import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPrices } from './sort-prices';

describe('SortPrices', () => {
  let component: SortPrices;
  let fixture: ComponentFixture<SortPrices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortPrices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortPrices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
