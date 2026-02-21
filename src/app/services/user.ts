import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  api = 'https://d2k-static-assets.s3.ap-south-1.amazonaws.com/assignment-files/python-backend-assignment/users.json';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.api);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.api}/${id}`);
  }
}