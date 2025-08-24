import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeProtectionComponent implements OnInit {
  type:any;
  target:any;
  imgSrc:any
  insuranceDescription:any=' الخسارة أو التلف الذي يلحق بالمباني و / أو المحتويات الموجودة بداخلها نتيجة:* الحريق والانفجار. الزلازل والعواصف والرياح والفيضان. نشع مياه الشرب وخزانات المياه العلوية بسبب تسربها من المواسير بسبب عارض او بسبب متعمد من غير افراد الاسرة او من افراد الخدم. الفعل الضار من غير أفراد الأسرة بما في ذلك السرقة. الخسارة العرضية الناتجة عن تلف أنابيب الغاز – الكابلات الكهربائية الممتدة بين المبنى و المصدر الرئيسى . · الحوادث الشخصية للمؤمن له أو زوجه* ·  *تعويـــض الايجــــار  * المسئولية المدنية قبل المالك والغير'

  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)
  }
}
