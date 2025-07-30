import { Injectable } from '@angular/core';
import { catchError, retry, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfile {
  getUserProfile() {
    return throwError(() => new Error('Failed to fetch Details')).pipe(
      retry(3),
      catchError((error) => {
        console.log(error);
        return of('Failed Fetching Details! Max tries Over');
      })
    );
  }
}
