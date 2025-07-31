import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/usermodel';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserGenericService } from '../../../services/user-service';
@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  usersList: User[] = [];

  constructor(
    private UserGenericService: UserGenericService,
    private router: Router
  ) {}

  getUsers() {
    this.UserGenericService.getAll().subscribe((data) => {
      this.usersList = data;
    });
  }
  goToUser(id: number) {
    console.log(id);
    this.router.navigate(['/users', id]);
  }

  deleteUser(id: number) {
    this.UserGenericService.delete(id).subscribe(() => {
      this.getUsers();
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
