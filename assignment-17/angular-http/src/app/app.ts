import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsList } from './components/task-1/products-list/products-list';
import { MessageShower } from './components/UI/message-shower/message-shower';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessageShower, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-http';
}
