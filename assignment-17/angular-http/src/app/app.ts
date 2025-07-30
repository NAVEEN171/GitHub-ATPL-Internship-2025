import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsList } from './components/products-list/products-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-http';
}
