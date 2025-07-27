import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { WeatherModule } from './weather/weather-module';

@Component({
  selector: 'app-root',
  imports: [WeatherModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Dependency-Injection';
}
