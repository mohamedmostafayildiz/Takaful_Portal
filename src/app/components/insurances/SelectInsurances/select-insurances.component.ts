import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-select-insurances',
  templateUrl: './select-insurances.component.html',
  styleUrls: ['./select-insurances.component.scss']
})
export class SelectInsurancesComponent implements OnInit{
  insuraceTypeVal:any='';
  type:any;
  individualArr:any=[
    {id:15,value:'تأمين طبي محلي'},
    {id:16,value:'تأمين طبي دولي'},
    {id:17,value:'تأمين حياه'},
    {id:18,value:'تأمين المراكب والخيوت '},
    {id:19,value:'برامج الادخار'},
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
    {id:9,value:'تأمين ضد الحوادث الشخصيه'},
    {id:10,value:'تأمين هندسي'},
    {id:11,value:'تأمين النقل'},
    {id:12,value:'تأمين التقاعد'},
    {id:13,value:'تأمين سيارات تجاريه'},
    {id:14,value:'تأمين الممتلكات'}
  ]
  globalArr:any
  constructor(private _ActivatedRoute:ActivatedRoute,private _Router:Router){
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
  selected:any
    // get Selected insurance
  getSelectedInsurance(event:any){
    this.selected=event.value
  }
  Next(){
    if(this.selected==1||this.selected==15){
      this._Router.navigate(['/LocalMedical',this.type,this.selected])
    }else if(this.selected==2||this.selected==16){
      this._Router.navigate(['/GlobalMedical',this.type,this.selected])
    }else if(this.selected==3||this.selected==17){
      this._Router.navigate(['/Life',this.type,this.selected])
    }else if(this.selected==9||this.selected==23){
      this._Router.navigate(['/PersonalAccidents',this.type,this.selected])
    }else if(this.selected==13||this.selected==22){
      this._Router.navigate(['/Cars',this.type,this.selected])
    }else if(this.selected==14){
      this._Router.navigate(['/Properties',this.type,this.selected])
    }else if(this.selected==18||this.selected==6){
      this._Router.navigate(['/Ships',this.type,this.selected])
    }else if(this.selected==4){
      this._Router.navigate(['/TradeCredit',this.type,this.selected])
    }else if(this.selected==5||this.selected==19){
      this._Router.navigate(['/Money',this.type,this.selected])
    }else if(this.selected==7){
      this._Router.navigate(['/Responsibilities',this.type,this.selected])
    }else if(this.selected==10){
      this._Router.navigate(['/Engineering',this.type,this.selected])
    }else if(this.selected==11){
      this._Router.navigate(['/Transport',this.type,this.selected])
    }else if(this.selected==12){
      this._Router.navigate(['/Entire',this.type,this.selected])
    }else if(this.selected==24){
      this._Router.navigate(['/Motorcycle',this.type,this.selected])
    }else if(this.selected==25){
      this._Router.navigate(['/HomeProtection',this.type,this.selected])
    }
  }
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)
  }
}
