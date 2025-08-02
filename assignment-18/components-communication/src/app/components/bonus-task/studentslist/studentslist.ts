import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Students } from '../students/students';

@Component({
  selector: 'app-studentslist',
  imports: [Students],
  templateUrl: './studentslist.html',
  styleUrl: './studentslist.css',
})
export class StudentslistParent {
  currentUser: string = '';
  constructor(private snackBar: MatSnackBar) {}
  studentsList = ['Dileep', 'Naveen', 'Mahesh', 'Divya'];
  notification: string = '';
  notify(message: string) {
    this.notification = message;
    console.log(message);
    this.currentUser = message;
    this.snackBar.open(message, 'hide', {
      duration: 3000,
    });
  }
}
