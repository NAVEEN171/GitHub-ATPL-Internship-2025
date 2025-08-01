import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkLightToggler } from './dark-light-toggler';

describe('DarkLightToggler', () => {
  let component: DarkLightToggler;
  let fixture: ComponentFixture<DarkLightToggler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkLightToggler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkLightToggler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
