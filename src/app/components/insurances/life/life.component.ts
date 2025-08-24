import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {
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
      this.insuranceDescription='هل فكرت كيف ستتمكن من تأمين مستقبل عائلتك؟ كيف ستضمن عدم اختلال دخل عائلتك ومواجهة تحديات الحياة؟ توفير تغطية وقائية تضمن الأمن المالي لعائلتك توفر الكان للوساطة في التأمين مجموعة متنوعة من برامج التأمين على الحياة المقدمة من أفضل شركات التأمين على الحياة في مصر   المزايا التأمينية الإضافية الاختيارية: ✓ دفع مبلغ التأمين في حالة الإصابة بالعجز الكلي الدائم الناجم عن مرض أو حادث ✓ دفع مبلغ التأمين في حالة الإصابة بأحد الامراض الحرجة ✓ دفع مبلغ التأمين في حالة الوفاة بسبب حادث'
    }else if(type=='individual'){
      $(".Indiviual").show(500)
      $(".companies").hide(500)
      this.insuranceDescription='هل فكرت كيف ستتمكن من تأمين مستقبل عائلتك؟ كيف ستضمن عدم اختلال دخل عائلتك ومواجهة تحديات الحياة؟ توفير تغطية وقائية تضمن الأمن المالي لعائلتك توفر الكان للوساطة في التأمين مجموعة متنوعة من برامج التأمين على الحياة المقدمة من أفضل شركات التأمين على الحياة في مصر   المزايا التأمينية الإضافية الاختيارية: ✓ دفع مبلغ التأمين في حالة الإصابة بالعجز الكلي الدائم الناجم عن مرض أو حادث ✓ دفع مبلغ التأمين في حالة الإصابة بأحد الامراض الحرجة ✓ دفع مبلغ التأمين في حالة الوفاة بسبب حادث'
    }
  }



 
  ngOnInit(): void {
    this.getInsuranceType(this.type)
    $("html , body").animate({scrollTop:0} ,0)

  }
}
