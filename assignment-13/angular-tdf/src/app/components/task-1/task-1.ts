import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-1',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-1.html',
  styleUrl: './task-1.css',
})
export class Task1 {
  user = {
    username: '',
    password: '',
  };
  onSubmit(formData: NgForm) {
    console.log(formData.value);
  }
}
