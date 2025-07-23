import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  imports: [ReactiveFormsModule],
  templateUrl: './nested-form.html',
  styleUrl: './nested-form.css',
})
export class NestedForm {
  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl(''),
      pincode: new FormControl(''),
    }),
  });
  onSubmit() {
    console.log(this.userForm.value);
  }
  onReset() {
    this.userForm.reset();
  }
}
