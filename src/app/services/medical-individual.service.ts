import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicalIndividualService {
  // baseURL:any='https://1f49-156-204-25-54.ngrok-free.app/api/';
  baseURL:any='http://97.74.82.75:7878/api/';
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _HttpClient:HttpClient) { }


  getAllMedicalCompanies(){
    return this._HttpClient.get(this.baseURL+'MedicalCompany/GetAllMedicalCompanies',this.configGet)
  }

  GetCompanyHealthInsuranceTypesByCompanyId(id:any){
    return this._HttpClient.get(this.baseURL+'CompanyHealthInsuranceType/GetCompanyHealthInsuranceTypesByCompanyId?id='+id,this.configGet)
  }
  

  GetAllPlaceOfTretment(id:any){
    return this._HttpClient.get(this.baseURL+'PlaceOfTreatment/GetAllPlaceOfTreatmentForOneCompany?CompanyId='+id,this.configGet)
  }

  GetDetailsOfOnePlaceTreatmentByType(id:any, type:any){
    return this._HttpClient.get(this.baseURL+'PlaceOfTreatmentDetails/GetDetailsOfOnePlaceTreatmentByType?Placeid='+id+'&TypeId='+type,this.configGet)
  }

  AddMedicalPricingData(Body:any){
    return this._HttpClient.post(this.baseURL+'MedicalPricingData/AddMedicalPricingData',Body)
  }

  GetMedicalInsurancePrice(id:any){
    return this._HttpClient.get(this.baseURL+'MedicalInsurancePrice/GetMedicalInsurancePrice?MedicalPricingDataId='+id,this.configGet)
  }
}
