import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  isPremiumUser = true;
  showDetails = true;
  message = '';
  userName = 'John Deo';
  userAge = 25;
  userImage = 'https://cdn-icons-png.flaticon.com/512/10337/10337609.png';
  clickMessage = '';
  onClick() {
    this.clickMessage = `button clicked by ${this.userName}`;
  }
  skills = ['Angular', 'TypeScript', 'HTML', 'CSS'];
}
