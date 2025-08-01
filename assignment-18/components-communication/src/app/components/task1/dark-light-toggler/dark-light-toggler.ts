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
  selector: 'app-dark-light-toggler',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dark-light-toggler.html',
  styleUrl: './dark-light-toggler.css',
})
export class DarkLightToggler {
  preferredTheme: FormGroup;
  constructor(private fb: FormBuilder) {
    this.preferredTheme = this.fb.group({
      theme: ['', Validators.required],
    });
  }
  clearTheme() {
    if (localStorage.getItem('theme')) {
      localStorage.removeItem('theme');
    }
  }
  onSubmit() {
    console.log(this.preferredTheme.value);
    localStorage.setItem('theme', this.preferredTheme.value.theme);
  }
}
