import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = 'https://tsi-quiz.herokuapp.com/' + 'api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: any;
  constructor(private http: HttpClient) {}

  login(credentials): Observable<any> {
    return this.http.post(
      API_URL + '/signin',
      {
        username: credentials.username,
        password: credentials.password,
      },
      httpOptions
    );
  }

  register(user): Observable<any> {
    return this.http.post(
      API_URL + '/signup',
      {
        username: user.username,
        email: user.email,
        password: user.password,
      },
      httpOptions
    );
  }
  registerUser(user): Observable<any> {
    return this.http.post(
      API_URL + '/signupUser',
      {
        username: user.username,
        email: user.email,
        password: user.password,
      },
      httpOptions
    );
  }
}
