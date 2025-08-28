import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://c0e8e37d6d31.ngrok-free.app/api/Auth/login';
  private registerUrl = 'https://c0e8e37d6d31.ngrok-free.app/api/Auth/register';

  constructor(private http: HttpClient) {}

  login(credentials: { identifier: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }
signup(data: { name: string; phoneNumber: string; email: string; password: string }): Observable<any> {
  return this.http.post(this.registerUrl, data);
}

}
