import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './basic-reactive-form.html',
  styleUrl: './basic-reactive-form.css',
})
export class BasicReactiveForm {
  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  onSubmit() {
    console.log(this.userForm.value);
  }
  onReset() {
    this.userForm.reset();
  }
}
