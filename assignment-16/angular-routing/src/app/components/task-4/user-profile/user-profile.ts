import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    });
  }
  canDeactivate(): boolean {
    if (this.userForm.dirty) {
      return confirm('you have unsaved changes!');
    }
    return true;
  }
  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
