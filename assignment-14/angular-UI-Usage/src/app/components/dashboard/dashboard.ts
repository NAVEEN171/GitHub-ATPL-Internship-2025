import { Component, OnInit } from '@angular/core';
import { UserData } from '../../services/user-data';
import { UsersDashboard } from '../users-dashboard/users-dashboard';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  imports: [UsersDashboard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  users: User[] = [];

  constructor(private userService: UserData) {}

  tranformUsers(res: any[]) {
    this.users = res.map((user) => ({
      uid: user.id,
      name: user.username,
      companyName: user.company.name,
      city: user.address.city,
    }));
    console.log(this.users);
  }

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe({
      next: (data) => {
        this.tranformUsers(data);
      },
      error: (error) => console.log(error),
    });
  }
}
