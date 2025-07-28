import { Component, Input } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { User } from '../../models/user';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-dashboard',
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './users-dashboard.html',
  styleUrl: './users-dashboard.css',
})
export class UsersDashboard {
  displayedColumns: string[] = ['uid', 'name', 'city', 'companyName'];
  @Input() users: User[] = [];
}
