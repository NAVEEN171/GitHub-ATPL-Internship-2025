import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import {
  ReactiveFormsModule,
  FormControl,
  FormBuilder,
  FormArray,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form-dialog',
  imports: [
    MatDialogTitle,
    ReactiveFormsModule,
    MatDialogContent,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButton,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './user-form-dialog.html',
  styleUrl: './user-form-dialog.css',
})
export class UserFormDialog {
  data = inject(MAT_DIALOG_DATA);

  userDetails: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserFormDialog>,
    private messageContainer: MatSnackBar
  ) {
    this.userDetails = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }
  closeDialog() {
    this.dialogRef.close(this.userDetails.value);
    this.messageContainer.open(
      `details saved ${this.userDetails.value.name} ! Stay tuned `
    );
  }
}
