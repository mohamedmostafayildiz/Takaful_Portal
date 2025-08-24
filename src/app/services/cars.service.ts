import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  // baseURL:any='https://1f49-156-204-25-54.ngrok-free.app/';
  baseURL:any='http://97.74.82.75:7878/api/';

  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _HttpClient:HttpClient) { }




  getAllCarsInfo(){
    return this._HttpClient.get(this.baseURL+'carInfo/GetAllCarInfo', this.configGet)
  }
  getLessOffer(id:any){
    return this._HttpClient.get(this.baseURL+'CompanyInfo/GetLessOffer?carModelId='+id, this.configGet)
  }
  AddNewCar(Model:any){
    return this._HttpClient.post(this.baseURL+'Car/AddCar',Model, this.ConfigPost)
  }
  // Add Accident
  AddAccident(formData:any){
    return this._HttpClient.post(this.baseURL+'Accident/AddAccident',formData) 
  }
        //get All Offers
  GetCompanyOffers(companyId:any,carModelId:any, Price:any){
    return this._HttpClient.get(this.baseURL+'CompanyInfo/GetCompanyOffers?CompanyId='+companyId+'&carModelId='+carModelId+'&price='+Price, this.configGet)
  }
      // User Personal Images
  PersonalImagesUrl(FormData:any){
    return this._HttpClient.post(this.baseURL+'api/PersonalImagesUrl/AddPersonalImages',FormData)
  }
}
