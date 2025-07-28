import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  constructor(private _http: HttpClient) {}

  fetchUsers() {
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
