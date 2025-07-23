import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-phone-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-phone-form.html',
  styleUrl: './dynamic-phone-form.css',
})
export class DynamicPhoneForm {
  PhoneForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.PhoneForm = fb.group({
      phone: this.fb.array([]),
    });
  }
  get phoneNo(): FormArray {
    return this.PhoneForm.get('phone') as FormArray;
  }

  AddPhone() {
    return this.fb.group({
      mobile: ['', Validators.required],
    });
  }

  addNewField() {
    this.phoneNo.push(this.AddPhone());
  }
  removeAtIndex(idx: number) {
    this.phoneNo.removeAt(idx);
  }
  onSubmit() {
    console.log(this.PhoneForm.value);
  }
}
