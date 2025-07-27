import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-service';
import { WeatherData } from '../../models/weather-data';
import { catchError, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-component',
  standalone: false,
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  private weatherSubscription?: Subscription;
  weatherDetails: WeatherData = {
    temperature: 0,
    cityName: '',
    description: '',
  };
  fetchError = '';
  constructor(private weather: WeatherService) {}
  getWeatherDetails() {
    this.weatherSubscription = this.weather.getWeatherDetails().subscribe({
      next: (data) => {
        this.weatherDetails = data;
        this.fetchError = '';
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.weatherSubscription = this.weather
      .getWeatherWithError()
      .pipe(
        catchError((error) => {
          console.log(error);
          this.fetchError = error;
          return of({
            temperature: 0,
            cityName: '',
            description: '',
          });
        })
      )
      .subscribe({
        next: (data) => {
          this.weatherDetails = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  ngOnDestroy(): void {
    if (this.weatherSubscription) {
      this.weatherSubscription.unsubscribe();
    }
  }
}
