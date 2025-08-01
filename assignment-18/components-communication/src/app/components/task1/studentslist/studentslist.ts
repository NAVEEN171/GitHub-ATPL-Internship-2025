import { Component } from '@angular/core';
import { Students } from '../students/students';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-students-list',
  imports: [Students],
  templateUrl: './studentslist.html',
  styleUrl: './studentslist.css',
})
export class Studentslist {
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
