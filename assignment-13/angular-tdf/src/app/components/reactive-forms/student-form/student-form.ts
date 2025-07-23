import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ValidateZipCode } from '../../../custom-validators/zipcode-check';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  studentForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: [' ', ValidateZipCode],
      }),
      phonenos: this.fb.array([]),
    });
  }

  get phones(): FormArray {
    return this.studentForm.get('phonenos') as FormArray;
  }
  addPhone() {
    return this.fb.group({
      mobileno: '',
    });
  }
  addNewPhone() {
    this.phones.push(this.addPhone());
  }
  removeAtIndex(num: number) {
    this.phones.removeAt(num);
  }
}
