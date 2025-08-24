import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  // baseURL:any='https://1f49-156-204-25-54.ngrok-free.app/api/';
  baseURL:any='http://97.74.82.75:7878/api/';
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _HttpClient:HttpClient){ }

  getFeesList(){
    return this._HttpClient.get(this.baseURL+'List/GetFees',this.configGet)
  }
}
