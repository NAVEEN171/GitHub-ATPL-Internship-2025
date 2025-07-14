import { CommonModule } from '@angular/common';
import { Component, input, signal, effect } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { FormsModule } from '@angular/forms';
import { EmployeeDetails } from '../../services/employee-details';

@Component({
  selector: '[app-table-row]',
  imports: [CommonModule, FormsModule],
  templateUrl: './table-row.html',
  styleUrl: './table-row.scss',
})
export class TableRow {
  employee = input<Employee>();
  isEditing = signal<boolean>(false);

  tempEmployee: Employee = {
    employeeId: 0,
    email: '',
    employeeName: '',
    department: '',
  };
  constructor(private employeeService: EmployeeDetails) {
    effect(() => {
      const Employee = this.employee();
      if (Employee !== undefined) {
        this.tempEmployee = { ...Employee };
      }
    });
  }
  onSaveChanges = () => {
    this.employeeService.updateUser(this.tempEmployee);
    this.isEditing.set(false);
  };
  onCancelEmployeeChanges = () => {
    const Employee = this.employee();
    if (Employee !== undefined) {
      this.tempEmployee = { ...Employee };
    }

    this.allowToggleEditing();
  };
  onDeleteEmployee = (id: number) => {
    this.employeeService.deleteById(id);
  };

  allowToggleEditing() {
    this.isEditing.update((val) => !val);
  }
}
