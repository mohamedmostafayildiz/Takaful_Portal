import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent {
  type:any;
  target:any;
  imgSrc:any='';
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
      this.imgSrc='../../../../assets/imgs/insurances/Money.png'
      this.insuranceDescription='نحن نتفهم أن تأثير الجرائم التجارية يتجاوز الإضرار بميزانيتك العامة، لذلك نقدم وثائق تغطى السيولة المالية بشركتك. تأمين خيانة الأمانة  تأمين ضد لسرقة بالإكراه'

    }else if(type=='individual'){
      $(".Indiviual").show(500)
      $(".companies").hide(500)
      this.imgSrc='../../../../assets/imgs/insurances/money2.png'
      this.insuranceDescription='صممت خطة التقاعد التأمينية بنظام الادخار طويل الأجل والحماية لتحقق أهدافكم المالية خلال فترة التقاعد وذلك عن طريق ادخار مبالغ مالية في متناول اليد بشكل دوري. وبجانب نظام الادخار التراكمي فهناك أرباح الاستثمار التي تحصلون عليها سنوياً. أما في حالة الوفاة لا قدر الله، يتم صرف مبلغ مالي متفق عليه مسبقاً إلى المستفيدين من الوثيقة كنوع من مزايا الحماية في هذا النظام.'
    }
  }
  ngOnInit(): void {
    this.getInsuranceType(this.type)
    $("html , body").animate({scrollTop:0} ,0)

  }
}
