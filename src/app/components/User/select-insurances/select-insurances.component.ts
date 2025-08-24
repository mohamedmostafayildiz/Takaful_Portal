import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-insurances',
  templateUrl: './select-insurances.component.html',
  styleUrls: ['./select-insurances.component.scss']
})
export class SelectInsurancesComponent {
  insuraceTypeVal:any='';
  type:any;
  individualArr:any=[
    {id:15,value:'تأمين طبي محلي'},
    {id:16,value:'تأمين طبي دولي'},
    {id:17,value:'تأمين حياه'},
    {id:18,value:'تأمين المراكب والخيوت '},
    {id:19,value:'برامج الادخار'},
    {id:20,value:'تأمين التكافلي '},
    {id:21,value:'تأمين الممتلكات'},
    {id:22,value:'تأمين السياره'},
    {id:23,value:'تأمين ضد الحوادث الشخصيه'},
    {id:24,value:'تأمين الدرجات الناريه'},
    {id:25,value:'تأمين حمايه المنزل'}
  ]
  companiesArr:any=[
    {id:1,value:'تأمين طبي محلي'},
    {id:2,value:'تأمين طبي دولي'},
    {id:3,value:'تأمين حياه'},
    {id:4,value:'تأمين الائتمان التجاري'},
    {id:5,value:'تأمين اموال'},
    {id:6,value:'تأمين اجسام السفن'},
    {id:7,value:'تأمين المسؤليات'},
    {id:8,value:'تأمين تكافلي'},
    {id:9,value:'تأمين ضد الحوادث الشخصيه'},
    {id:10,value:'تأمين هندسي'},
    {id:11,value:'تأمين النقل'},
    {id:12,value:'تأمين التقاعد'},
    {id:13,value:'تأمين سيارات تجاريه'},
    {id:14,value:'تأمين الممتلكات'}
  ]
  globalArr:any
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      if(this.type=='individual'){
        this.globalArr=''
        this.insuraceTypeVal=''
        this.globalArr = this.individualArr
      }else if(this.type=='companies'){
        this.globalArr=''
        this.insuraceTypeVal=''
        this.globalArr = this.companiesArr
      }
    })
  }
  // individual Or Companies
  getInsuranceType(type:any){
    this.insuraceTypeVal=''
    if(type=='individual'){
      this.globalArr=''
      this.globalArr = this.individualArr;
      this.type='individual'
    }else{
      this.globalArr=''
      this.globalArr = this.companiesArr;
      this.type='companies'
    }
  }

  getSelectedInsurance(data:any){
    console.log(data.value);
    console.log(this.type);
  }
}
