import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../services/user-profile';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-2',
  imports: [MatSnackBarModule],
  templateUrl: './task-2.html',
  styleUrl: './task-2.css',
})
export class Task2 implements OnInit {
  constructor(private user: UserProfile, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.user.getUserProfile().subscribe({
      next: (data) => {
        console.log(data);
        this.snackBar.open(data, 'error', {
          duration: 2000,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
