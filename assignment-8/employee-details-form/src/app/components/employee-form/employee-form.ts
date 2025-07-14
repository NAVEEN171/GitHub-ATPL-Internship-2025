import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from '../../interfaces/employee';
import { RouterLink } from '@angular/router';
import { EmployeeDetails } from '../../services/employee-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './employee-form.html',
  standalone: true,
  styleUrl: './employee-form.scss',
})
export class EmployeeForm {
  employeeInitialData: Employee = {
    employeeId: 0,
    email: '',
    employeeName: '',
    department: '',
  };
  employeeDetails: Employee = this.employeeInitialData;
  constructor(
    private employeeDetailsService: EmployeeDetails,
    private router: Router
  ) {}

  onSubmit(formData: NgForm) {
    console.log('Form submitted:', formData.value);
    if (
      this.employeeDetailsService.verifyIfUserExists(formData.value.employeeId)
    ) {
      alert('Employee with this ID already exists!');
      return;
    } else {
      this.employeeDetailsService.addUserData(formData.value);

      this.router.navigateByUrl('/');
      alert(`EmployeeID [${formData.value.employeeId}] record is submitted`);
      formData.resetForm();
      this.employeeDetails = this.employeeInitialData;
    }
  }
}
