import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalAccidentService {

  // baseURL:any='https://1f49-156-204-25-54.ngrok-free.app/api/';
  baseURL:any='http://97.74.82.75:7878/api/';
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _HttpClient:HttpClient) { }

  GetAllPersonalAccidentCompany(){
    return this._HttpClient.get(this.baseURL+'PersonlAccidentCompany/GetAllPersonalAccidentCompany',this.configGet)
  }
  // GetHomeIndById(){
  //   return this._HttpClient.get(this.baseURL+'',this.configGet)
  // }
  GetPremiumAndTotalInstallment(id:any){
    return this._HttpClient.get(this.baseURL+'PersonalAccidentPrice/GetPremiumAndTotalInstallment?personalAccidentPriceId='+id,this.configGet)
  }
  PersonalAccidentPrice(Body:any){
    return this._HttpClient.post(this.baseURL+'PersonalAccidentPrice/AddPrice',Body)
  }
}
