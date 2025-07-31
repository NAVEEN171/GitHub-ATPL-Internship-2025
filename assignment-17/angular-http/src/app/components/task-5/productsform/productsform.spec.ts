import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productsform } from './productsform';

describe('Productsform', () => {
  let component: Productsform;
  let fixture: ComponentFixture<Productsform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productsform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productsform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
