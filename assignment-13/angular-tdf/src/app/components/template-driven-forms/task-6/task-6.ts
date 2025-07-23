import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-6',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-6.html',
  styleUrl: './task-6.css',
})
export class Task6 {
  user = {
    username: '',
    email: '',
    password: '',
  };
  onSubmit(formData: NgForm) {
    console.log(formData.value);
  }
}
