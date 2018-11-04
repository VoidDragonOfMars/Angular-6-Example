import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppComponent} from '../app.component';
import {AuthToken} from '../model/authToken.model';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  url = AppComponent.API_URL + '/login';
  login(username: string, password: string): Observable<any> {
    const credentials = {username: username, password: password};

    return this.http.post( this.url, credentials);
  }
}
