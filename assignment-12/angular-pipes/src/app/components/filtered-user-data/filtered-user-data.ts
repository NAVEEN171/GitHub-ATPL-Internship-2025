import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  name: string;
  lastLogin: Date;
  isActive: boolean;
}

@Component({
  selector: 'app-filtered-user-data',
  imports: [CommonModule],
  templateUrl: './filtered-user-data.html',
  styleUrl: './filtered-user-data.scss',
})
export class FilteredUserData {
  today = new Date();
  users: User[] = [
    {
      name: 'Naveen',
      lastLogin: this.today,
      isActive: true,
    },
    {
      name: 'Mahesh',
      lastLogin: new Date(),
      isActive: true,
    },
    {
      name: 'Dileep',
      lastLogin: new Date(),
      isActive: true,
    },
    {
      name: 'Gnaneshwar ',
      lastLogin: new Date(),
      isActive: false,
    },
  ];
  filteredArray: User[] = [
    ...this.users.filter((User) => User.isActive === true),
  ];
}
