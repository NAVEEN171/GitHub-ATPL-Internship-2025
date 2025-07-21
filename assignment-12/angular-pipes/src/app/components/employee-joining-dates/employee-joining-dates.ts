import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-joining-dates',
  imports: [CommonModule],
  templateUrl: './employee-joining-dates.html',
  styleUrl: './employee-joining-dates.scss',
})
export class EmployeeJoiningDates {
  users = [
    {
      name: 'Naveen',
      joiningDate: new Date(),
    },
    {
      name: 'Mahesh',
      joiningDate: new Date(),
    },
    {
      name: 'Dileep',
      joiningDate: new Date(),
    },
    {
      name: 'Gnaneshwar ',
      joiningDate: new Date(),
    },
  ];
}
