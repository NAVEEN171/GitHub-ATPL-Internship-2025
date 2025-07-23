import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordConfirmValidator } from './password-confirm-validator';

describe('PasswordConfirmValidator', () => {
  let component: PasswordConfirmValidator;
  let fixture: ComponentFixture<PasswordConfirmValidator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordConfirmValidator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordConfirmValidator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
