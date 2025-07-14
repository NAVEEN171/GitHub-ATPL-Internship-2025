import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-greeting',
  imports: [FormsModule, CommonModule],

  templateUrl: './user-greeting.html',
  styleUrl: './user-greeting.scss',
})
export class UserGreeting {
  userData: User = {
    age: 0,
    userName: '',
  };
  onSubmit(formData: NgForm) {
    console.log(this.userData);
    alert(
      `hello ${this.userData.userName}! you are ${this.userData.age} years old`
    );
    formData.resetForm();
    this.userData = {
      age: 0,
      userName: '',
    };
  }
}
