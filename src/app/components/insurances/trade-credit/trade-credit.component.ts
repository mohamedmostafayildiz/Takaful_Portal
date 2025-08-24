import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-trade-credit',
  templateUrl: './trade-credit.component.html',
  styleUrls: ['./trade-credit.component.scss']
})
export class TradeCreditComponent {
  type:any;
  target:any;
  imgSrc:any
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }
  insuranceDescription:any='هو أداة مالية تعمل على توفير الحماية للمقرض المتعامل بالتسهيلات الائتمانية ضد مخاطر عدم السداد لقيمة التمويلات الممنوحة لعملائه التي غالبا ما تنتج عن التعثر المحتمل في سداد أقساط التمويل أو إفلاس المقترض أو بسبب الاحوال الاقتصادية والسياسية الخارجة عن سيطرة كلا من المقرض والمقترض . تقوم شركة التأمين بمنح الشركة المتعاقدة - الجهة التي تقوم بمنح العملاء القروض سواء كان بنك أو مؤسسة مالية أو جهة تمويل عقاري أخرى - معها بتعويض بمبلغ مالي يشمل قيمة الأقساط المتبقية من القرض على المقترض في حالة عدم السداد لمدة 3 أقساط متتالية من أقساط القرض وذلك طبقاً للشروط المبرمة بين الطرفين في العقد الخاص بالقرض الوارد منه نسخة لجهة التأمين، وتشمل أنواع القروض التي تسمح وثيقة تأمين ضد مخاطر عدم السداد بتغطيتها كل من: قروض المشروعات الصغيرة والمتوسطة. القروض الشخصية. قروض شراء السيارات. القروض العقارية. قروض المشروعات متناهية الصغر'

 
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)

  }
}
