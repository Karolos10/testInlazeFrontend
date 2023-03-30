import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private myAppurl: string;
  private myApiurl: string;

  constructor(private http: HttpClient) {
    this.myAppurl = environment.endpoint;
    this.myApiurl = 'api/users/'
  }

  sinIn(user: User): Observable<any>{
    return this.http.post(`${this.myAppurl}${this.myApiurl}`, user);
  }
}
