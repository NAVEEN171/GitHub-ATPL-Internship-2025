import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-role-based-content',
  imports: [CommonModule, FormsModule],
  templateUrl: './role-based-content.html',
  styleUrl: './role-based-content.css',
})
export class RoleBasedContent {
  role = '';
  onRoleChange(newRole: string) {
    console.log(this.role);
  }
}
