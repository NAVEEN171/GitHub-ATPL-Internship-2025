import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-4',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-4.html',
  styleUrl: './task-4.css',
})
export class Task4 {
  role = '';
}
