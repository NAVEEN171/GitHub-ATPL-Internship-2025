import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm implements OnInit {
  userForm: FormGroup;
  welcomeMessage: string = '';
  userName: string | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required]],
    });
  }
  constructMessage(name: string) {
    return `Hello ${name} ! How Was Your Day!`;
  }
  handleLogout() {
    this.welcomeMessage = '';
    this.userName = null;
    sessionStorage.removeItem('username');
  }
  onSubmit() {
    console.log(this.userForm.value);
    this.welcomeMessage = this.constructMessage(this.userForm.value.name);

    sessionStorage.setItem('username', this.userForm.value.name);
  }
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('username');
    if (this.userName) {
      this.welcomeMessage = this.constructMessage(this.userName);
    }
  }
}
