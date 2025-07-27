import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { LoggerService } from './logger-service';

@Injectable()
export class WeatherService {
  constructor(private logger: LoggerService) {}

  private weatherData = of({
    cityName: 'Vizag',
    temperature: 28,
    description: 'Partly cloudly',
  });
  getWeatherDetails() {
    console.log(this.logger.detailsFetched());
    return this.weatherData;
  }
  getWeatherWithError() {
    return throwError(() => new Error('Failed to load Weather Data'));
  }
}
