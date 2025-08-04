import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RoleService } from './services/role-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentRole: string = '';
  protected title = 'angular routing';
  constructor(private router: Router, private roleServiceData: RoleService) {}
  onRoleChange(newRole: string) {
    this.roleServiceData.changeRole(newRole);
  }
}
