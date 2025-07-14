import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../../services/employee-details';
import { Employee } from '../../interfaces/employee';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.scss',
})
export class EmployeeTable implements OnInit {
  constructor(private EmployeeDetailsService: EmployeeDetails) {}
  employeeDetails: Employee[] = [];

  ngOnInit(): void {
    this.employeeDetails = this.EmployeeDetailsService.getEmployeeData();
  }
}
