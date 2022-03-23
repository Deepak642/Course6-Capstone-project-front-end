import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userurl = environment.apiUrl + '/login';

  constructor(private http: HttpClient) {}

  //calling the server to generate token for user
  generateToken(credentials: any) {
    //token generate
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.post(`${this.userurl}`, credentials, {
      headers,
      responseType: 'text',
    });
  }

  //for login user
  loginUser(token) {
    localStorage.setItem('token', token.split(' ')[1]); //token.split(" ")[1]
    return true;
  }

  //to check that user is logged in or not
  isLoogedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }
  //for logout
  logout() {
    localStorage.removeItem('token');
    return true;
  }

  //for getting the token
  getToken() {
    return localStorage.getItem('token');
  }
}
