import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviewerService {
  // baseURL:any='https://0531-156-204-51-241.ngrok-free.app/api/';
    baseURL:any='http://97.74.82.75:7878/api/';

  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private _HttpClient:HttpClient) { }


  addpreViewerReport(formData:any){
    return this._HttpClient.post(this.baseURL+'PreviewerReport/addPreviewerReport', formData)
  }
  // Get All Previews Requests
  GetAllPreviewsRequests(){
    return this._HttpClient.get(this.baseURL+'InsuranceRequest/GetAllPreviewsRequests',this.configGet)
  }
  // Add Previewer Report
  addPreviewerReport(body:any){
    return this._HttpClient.post(this.baseURL+'PreviewerReport/addPreviewerReport',body,{responseType:'text'})
  }
}
