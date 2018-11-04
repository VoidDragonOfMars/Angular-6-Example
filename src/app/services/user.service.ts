import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { User } from '../model/user.model';
import {AppComponent} from '../app.component';
import {Observable} from 'rxjs';



@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private userUrl = AppComponent.API_URL + '/users';
  private id: string;

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + this.id);
  }

  public deleteUser(id: number) {
    return this.http.delete(this.userUrl + '/' + id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
}
