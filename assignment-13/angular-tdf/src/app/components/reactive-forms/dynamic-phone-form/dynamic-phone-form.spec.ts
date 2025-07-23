import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPhoneForm } from './dynamic-phone-form';

describe('DynamicPhoneForm', () => {
  let component: DynamicPhoneForm;
  let fixture: ComponentFixture<DynamicPhoneForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicPhoneForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicPhoneForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
