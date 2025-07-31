import { Component, OnInit } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserGenericService } from '../../../services/user-service';
@Component({
  selector: 'app-userform',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './userform.html',
  styleUrl: './userform.css',
})
export class Userform {
  userForm: FormGroup;
  userId: string | null = null;
  constructor(
    private fb: FormBuilder,
    private UserGenericService: UserGenericService,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      role: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  onSubmit() {
    if (!this.userId) {
      this.UserGenericService.create(this.userForm.value).subscribe((data) => {
        console.log(data);
      });
    } else {
      console.log(this.userId);

      this.UserGenericService.update(
        parseInt(this.userId),
        this.userForm.value
      ).subscribe((data) => {
        console.log(data);
      });
    }
  }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId && !isNaN(Number(this.userId)) && Number(this.userId) > 0) {
      this.UserGenericService.getById(parseInt(this.userId)).subscribe(
        (data) => {
          this.userForm.setValue({
            name: data.name,
            role: data.role,
          });
        }
      );
    } else {
      this.userId = null;
    }
  }
}
