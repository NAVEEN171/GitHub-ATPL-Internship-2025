import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { delay, map, Subject, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ng-table',
  imports: [NzDividerModule, NzTableModule],
  templateUrl: './ng-table.html',
  styleUrl: './ng-table.css',
})
export class NgTable {
  users: any[] = [];
  private usersSubject = new Subject();
  constructor(private _http: HttpClient) {
    this.subscribeMethod();
  }
  fetchUsers() {
    return this._http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
  subscribeMethod() {
    this.usersSubject
      .pipe(
        switchMap(() => {
          return this.fetchUsers().pipe(
            delay(2000),
            map((users: any) =>
              users.map((user: any) => ({
                name: user.name,
                email: user.email,
                company: user.company.name,
                city: user.address.city,
              }))
            )
          );
        })
      )
      .subscribe({ next: (data: any[]) => (this.users = data) });
  }
  refreshUsers() {
    this.usersSubject.next('');
  }
}
