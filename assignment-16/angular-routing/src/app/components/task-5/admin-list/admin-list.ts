// admin-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Admin {
  id: number;
  name: string;
  role: string;
  email: string;
}

@Component({
  selector: 'app-admin-list',
  standalone: false,
  templateUrl: './admin-list.html',
  styleUrl: './admin-list.css',
})
export class AdminList {
  admins: Admin[] = [
    {
      id: 1,
      name: 'Michael Johnson',
      role: 'Super Admin',
      email: 'michael@admin.com',
    },
    {
      id: 2,
      name: 'Emma Davis',
      role: 'Admin',
      email: 'emma@admin.com',
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Moderator',
      email: 'james@admin.com',
    },
  ];

  viewAdmin(admin: Admin): void {
    alert(`Viewing: ${admin.name} (${admin.role})`);
  }

  editAdmin(admin: Admin): void {
    alert(`Editing: ${admin.name}`);
  }
}
