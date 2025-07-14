import { Component, OnInit, signal } from '@angular/core';
import { EmployeeDetails } from '../../services/employee-details';
import { Employee } from '../../interfaces/employee';
import { TableRow } from '../table-row/table-row';

@Component({
  selector: 'app-employee-table',
  imports: [TableRow],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.scss',
})
export class EmployeeTable implements OnInit {
  constructor(private EmployeeDetailsService: EmployeeDetails) {}
  employeeDetails: Employee[] = [];
  isEditing = signal<boolean>(false);

  allowToggleEditing() {
    this.isEditing.update((val) => !val);
  }

  ngOnInit(): void {
    this.employeeDetails = this.EmployeeDetailsService.getEmployeeData();
  }
}
