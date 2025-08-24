import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL:any='http://97.74.82.75:7878/api/';

  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _HttpClient:HttpClient) { }





  // Download file Templete
  public getTempleteFile(){
    return this._HttpClient.get(this.baseURL+'File/DownloadFile',{observe:'response',
    responseType: 'blob',headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")})
  }

  //Upload File
        // Add File To Customer
  UploadFile(id:any,FormData:any){
    return this._HttpClient.post(this.baseURL+'File/uploadAndSaveExcelFile?id='+id,FormData,{responseType: 'text',})
  }

  // All Accidents
  getAllAccidents(){
    return this._HttpClient.get(this.baseURL+'Accident/GetAllAccidents',this.configGet)
  }

  // Get All Panding Requests
  GetAllPandingRequests(){
    return this._HttpClient.get(this.baseURL+'InsuranceRequest/GetAllPandingRequests',this.configGet)
  }

  // Change Status
  ChangeStatus(body:any){
    return this._HttpClient.put(this.baseURL+'InsuranceRequest/changeStatus',body,{responseType:'text'})
  }
}
