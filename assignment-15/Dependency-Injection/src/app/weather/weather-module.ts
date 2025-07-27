import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../services/weather-service';
import { DashboardComponent } from '../components/dashboard-component/dashboard-component';

@NgModule({
  declarations: [DashboardComponent], // importing
  imports: [CommonModule], // what modules can be used in this module
  providers: [WeatherService], // services
  exports: [DashboardComponent], // tells which part of the module is avialble to other module
})
export class WeatherModule {}
