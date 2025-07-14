import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetails {
  private employeeList: Employee[] = [];
  filteredItems: Employee[] = [];

  getEmployeeData(): Employee[] {
    if (localStorage.getItem('employeeList')) {
      this.employeeList = JSON.parse(
        localStorage.getItem('employeeList') || '[]'
      );
    } else {
      this.employeeList = [];
    }
    return this.employeeList;
  }

  verifyIfUserExists(id: number): boolean {
    return !!this.employeeList?.some((employee) => employee.employeeId === id);
  }
  deleteById(id: number): void {
    this.filteredItems = this.employeeList.filter(
      (emp) => emp.employeeId !== id
    );
    localStorage.setItem('employeeList', JSON.stringify(this.filteredItems));
    this.getEmployeeData();
  }
  updateUser(data: Employee) {
    this.filteredItems = this.employeeList.map((emp) => {
      if (emp.employeeId === data.employeeId) {
        return { ...data };
      }
      return emp;
    });

    localStorage.setItem('employeeList', JSON.stringify(this.filteredItems));
    this.getEmployeeData();
  }

  addUserData(employee: Employee): void {
    this.employeeList.push(employee);
    localStorage.setItem('employeeList', JSON.stringify(this.employeeList));
  }
}
