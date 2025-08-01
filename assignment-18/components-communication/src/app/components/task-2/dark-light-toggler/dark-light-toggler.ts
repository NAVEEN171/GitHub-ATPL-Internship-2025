import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class DarkLightToggler implements OnInit {
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
  ApplyTheme(value: string | null) {
    if (!value) {
      return;
    }
    if (value === 'light') {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
      }
    } else {
      document.body.classList.add('dark-mode');
    }
  }
  onSubmit() {
    console.log(this.preferredTheme.value);
    localStorage.setItem('theme', this.preferredTheme.value.theme);
    this.ApplyTheme(this.preferredTheme.value.theme);
  }
  ngOnInit(): void {
    if (localStorage.getItem('theme')) {
      this.ApplyTheme(localStorage.getItem('theme'));
    }
  }
}
