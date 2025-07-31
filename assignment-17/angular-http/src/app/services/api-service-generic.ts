import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceGeneric<T> {
  constructor(
    private _http: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<T> {
    return this._http.get<T>(`${this.baseUrl}/${id}`);
  }
  create(data: Omit<T, 'id'>): Observable<T> {
    return this._http.post<T>(`${this.baseUrl}`, data);
  }
  update(id: number, data: Partial<T>) {
    return this._http.put<T>(`${this.baseUrl}/${id}`, data);
  }
  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
