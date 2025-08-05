import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkLightTheme } from './dark-light-theme';

describe('DarkLightTheme', () => {
  let component: DarkLightTheme;
  let fixture: ComponentFixture<DarkLightTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkLightTheme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkLightTheme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
