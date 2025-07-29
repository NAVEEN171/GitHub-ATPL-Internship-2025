import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-routing';
  constructor(private router: Router) {}
  goToProductIdPage() {
    this.router.navigate(['products', this.generateRandomId()]);
  }
  generateRandomId() {
    return Math.floor(Math.random() * 1000) + 1;
  }
}
