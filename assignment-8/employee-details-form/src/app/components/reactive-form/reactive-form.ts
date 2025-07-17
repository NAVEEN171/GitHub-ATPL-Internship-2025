import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      skills: this.fb.array([]),
    });
  }
  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required],
    });
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }

  deleteSkill(i: number) {
    this.skills.removeAt(i);
  }
  onSubmit() {
    console.log(this.reactiveForm.value);
    this.reactiveForm.reset();
  }
}
