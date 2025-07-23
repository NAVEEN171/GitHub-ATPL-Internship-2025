import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { validatePasswordMatch } from '../../../custom-validators/password-match';

@Component({
  selector: 'app-password-confirm-validator',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './password-confirm-validator.html',
  styleUrl: './password-confirm-validator.css',
})
export class PasswordConfirmValidator {
  ReactiveForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.ReactiveForm = this.fb.group({
      password: [''],
      confirmPassword: [''],
    });
    this.ReactiveForm.setValidators(validatePasswordMatch);
  }
  onSubmit() {
    console.log(this.ReactiveForm.value);
  }
}
