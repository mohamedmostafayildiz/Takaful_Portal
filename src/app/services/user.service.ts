import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseURL:any='https://1f49-156-204-25-54.ngrok-free.app/';
  baseURL:any='http://97.74.82.75:7878/';
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  
  constructor(private _HttpClient:HttpClient) { }

 



  GetAllAccepted(){
    return this._HttpClient.get(this.baseURL+'api/InsuranceRequest/GetAllAccepted?userId='+localStorage.getItem('userId'), this.configGet)
  }

  getAllCarsInfo(){
    return this._HttpClient.get(this.baseURL+'carInfo/GetAllCarInfo', this.configGet)
  }
  getLessOffer(id:any){
    return this._HttpClient.get(this.baseURL+'CompanyInfo/GetLessOffer?carModelId='+id, this.configGet)
  }
  AddNewCar(Model:any){
    return this._HttpClient.post(this.baseURL+'Car/AddCar',Model, this.ConfigPost)
  }
        //get All Offers
  GetCompanyOffers(companyId:any,carModelId:any, Price:any){
    return this._HttpClient.get(this.baseURL+'CompanyInfo/GetCompanyOffers?CompanyId='+companyId+'&carModelId='+carModelId+'&price='+Price, this.configGet)
  }

      // User Personal Images
  PersonalImagesUrl(FormData:any){
    return this._HttpClient.post(this.baseURL+'api/PersonalImagesUrl/uploadImages',FormData,{responseType: 'text'})
  }

      // Add Insurance Request
  AddInsuranceRequest(Body:any){
    return this._HttpClient.post(this.baseURL+'api/InsuranceRequest/AddInsuranceRequest',Body,{responseType: 'text'})
  }

    // get user policy by id
  getAllUserPolices(id:any){
    return this._HttpClient.get(this.baseURL+'Policy/GetAllUserPolice?id='+id, this.configGet)
  }
  // Add Accident
  AddAccident(formData:any){
    return this._HttpClient.post(this.baseURL+'Accident/AddAccident',formData)
  }
}
