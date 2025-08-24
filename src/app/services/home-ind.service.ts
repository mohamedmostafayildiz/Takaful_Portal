import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeIndService {
  // baseURL:any='https://1f49-156-204-25-54.ngrok-free.app/api/';
  baseURL:any='http://97.74.82.75:7878/api/';

  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _HttpClient:HttpClient) { }

  GetAllHomeCompanies(){
    return this._HttpClient.get(this.baseURL+'HomeCompany/GetAllHomeCompanies',this.configGet)
  }
  GetHomeIndById(){
    return this._HttpClient.get(this.baseURL+'',this.configGet)
  }
  GetPermiumAndTotalInstallment(id:any){
    return this._HttpClient.get(this.baseURL+'HomePrice/GetPermiumAndTotalInstallment?HomePriceId='+id,this.configGet)
  }
  addHomePrice(Body:any){
    return this._HttpClient.post(this.baseURL+'HomePrice/addHomePrice',Body)
  }

}
