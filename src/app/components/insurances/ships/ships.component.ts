import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent {
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
      this.insuranceDescription='ويختص هذا النوع من التأمين بتأمين السفن بكافة أنواعها متضمنة اللنشات واليخوت أثناء مرحلة البناء أو مرحلة العمل كما تغطي الوثيقة الاضرار التي يتعرض لها هيكل السفينة والماكينات وكافة الأضرار والخسائر الناجمة عن الغرق أو الحريق أو حوادث الاصطدام البحري، بالإضافة إلى السفن تحت الانشاء'
    }else if(type=='individual'){
      $(".Indiviual").show(500)
      $(".companies").hide(500)
      this.insuranceDescription='ويختص هذا النوع من التأمين بتأمين السفن بكافة أنواعها متضمنة اللنشات واليخوت أثناء مرحلة البناء أو مرحلة العمل كما تغطي الوثيقة الاضرار التي يتعرض لها هيكل السفينة والماكينات وكافة الأضرار والخسائر الناجمة عن الغرق أو الحريق أو حوادث الاصطدام البحري، بالإضافة إلى السفن تحت الانشاء'
    }
  }



 
  ngOnInit(): void {
    this.getInsuranceType(this.type)
    $("html , body").animate({scrollTop:0} ,0)

  }
}
