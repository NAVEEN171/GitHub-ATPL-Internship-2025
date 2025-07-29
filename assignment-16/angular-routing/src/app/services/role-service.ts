import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  role = new BehaviorSubject<string>('');
  getRole() {
    return this.role;
  }
  changeRole(updatedRole: string) {
    console.log(updatedRole);
    this.role.next(updatedRole);
  }
}
