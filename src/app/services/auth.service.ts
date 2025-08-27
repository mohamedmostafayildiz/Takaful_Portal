import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://042190a1264a.ngrok-free.app/api/Auth/login';
  private registerUrl = 'https://042190a1264a.ngrok-free.app/api/Auth/register';

  constructor(private http: HttpClient) {}

  login(credentials: { identifier: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  signup(data: { name: string; phone: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.registerUrl, data);
  }
}
