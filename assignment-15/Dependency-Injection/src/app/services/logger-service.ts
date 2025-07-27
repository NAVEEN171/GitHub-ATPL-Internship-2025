import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  detailsFetched() {
    console.log('Weather details fetched');
  }
}
