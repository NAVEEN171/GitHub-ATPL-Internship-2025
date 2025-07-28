import { Component, Input, OnInit } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlipkartToggle } from '../../services/flipkart-toggle';

import { User } from '../../models/user';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-users-dashboard',
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,

    MatIconModule,
  ],
  templateUrl: './users-dashboard.html',
  styleUrl: './users-dashboard.css',
})
export class UsersDashboard implements OnInit {
  showIframe: boolean = false;
  displayedColumns: string[] = ['uid', 'name', 'city', 'companyName'];
  @Input() users: User[] = [];
  constructor(private flipkart: FlipkartToggle) {}
  openFlipkartFrame() {
    this.flipkart.toggleFlipKart();
  }

  ngOnInit(): void {
    this.flipkart.getFlipKartDetails().subscribe({
      next: (data) => (this.showIframe = data),
      error: (error) => console.log(error),
    });
  }
}
