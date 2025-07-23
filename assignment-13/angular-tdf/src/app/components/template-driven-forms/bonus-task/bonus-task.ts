import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bonus-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './bonus-task.html',
  styleUrl: './bonus-task.css',
})
export class BonusTask {
  user = {
    fullName: '',
    email: '',
    gender: '',
    course: '',
    comments: '',
  };
}
