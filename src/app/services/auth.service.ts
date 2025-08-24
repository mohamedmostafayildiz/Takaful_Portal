import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseURL:any='https://1f49-156-204-25-54.ngrok-free.app/';
  baseURL:any='http://97.74.82.75:7878/';

  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  _JwtHelperService =new JwtHelperService()
  constructor(private _HttpClient:HttpClient) { }


  // IsLoggedIn(){
  //   return !!localStorage.getItem('SchoolsToken')
  // }


    // User Login
  UserLogin(body:any){
    return this._HttpClient.post(this.baseURL+'Auth/Login',body,this.ConfigPost)
  }

    // Sign Up
    signUp(body:any){
    return this._HttpClient.post(this.baseURL+'Auth/Register',body,this.ConfigPost)
  }

  isLoggedDetails(){
    return  JSON.parse(localStorage.getItem("AlcanResponse")!);
  }
  isLoggedIn(){
    var token = localStorage.getItem("UserAlcanToken");
    return !this._JwtHelperService.isTokenExpired(token);
  }
}
