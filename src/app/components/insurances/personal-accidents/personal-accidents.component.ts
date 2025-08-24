import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any

@Component({
  selector: 'app-personal-accidents',
  templateUrl: './personal-accidents.component.html',
  styleUrls: ['./personal-accidents.component.scss']
})
export class PersonalAccidentsComponent {
  type:any;
  target:any;
  imgSrc:any
  insuranceDescription:any=''
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }
  getInsuranceType(type:any){
    console.log(type);
    if(type=='companies'){
      $(".companies").show(500)
      $(".Indiviual").hide(500)
      this.insuranceDescription=' يضمن هذا النوع للمؤمن عليه أو ورثته مبلغا من المال وذلك في حالات العجز الكلى أو الجزئي المستديم أو العجز الكلى المؤقت أو الوفاة الناتجة عن حادث يتعرض له المؤمن عليه المصروفات الطبية نتيجة لحادث. توفر خطط التأمين ضد الحوادث الشخصية حماية مالية لتخفيف المعاناة التي قد تفرضها ظروف الحياة المستجدة'
    }else if(type=='individual'){
      $(".Indiviual").show(500)
      $(".companies").hide(500)
      this.insuranceDescription=' يضمن هذا النوع للمؤمن عليه أو ورثته مبلغا من المال وذلك في حالات العجز الكلى أو الجزئي المستديم أو العجز الكلى المؤقت أو الوفاة الناتجة عن حادث يتعرض له المؤمن عليه المصروفات الطبية نتيجة لحادث. توفر خطط التأمين ضد الحوادث الشخصية حماية مالية لتخفيف المعاناة التي قد تفرضها ظروف الحياة المستجدة'
    }
  }



 
  ngOnInit(): void {
    this.getInsuranceType(this.type)
    $("html , body").animate({scrollTop:0} ,0)

  }
}
