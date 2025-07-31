import { Injectable } from '@angular/core';
import { ApiServiceGeneric } from './api-service-generic';
import { User } from '../models/usermodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiServiceGeneric<User> {
  constructor(_http: HttpClient) {
    super(_http, '  http://localhost:3000/Users');
  }
}
