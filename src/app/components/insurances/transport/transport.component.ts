import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent {
  type:any;
  target:any;
  imgSrc:any
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }
  insuranceDescription:any='برامج مصممة خصيصاً لتحمي أعمال شركتك في مجال الاستيراد/ التصدير، مع تغطية شاملة لأعمالك وشحناتك ضد جميع الأخطار سواء كانت في البحر أو البر أو الجو.. تغطى وثيقة النقل الخسائر او الاضرار التي تصيب البضائع اثناء النقل والناتجة عن اخطار الحريق او التصادم او الانقلاب للسيارة الناقلة للبضائع وايضا يمكن ان تمتد الوثيقة لتشمل بعض الاخطار الإضافية مثل اخطار السطو المسلح والشحن (التحميل والتنزيل). نساعدكم في الحصول على برامج تأمين مرنة توفر حماية شاملة للبضائع المشحونة براً وبحرا وجوا، وذلك من خلال وثيقة النقل البحري التي تغطي الاخطار المتمثلة في حوادث الغرق أو الحريق أو الضرر المائي والكسر أو الضرر الناجم عن الاصطدام البحري وكذلك يمكن اضافة اخطار الحرب والاضطرابات مقابل قسط إضافى.'

 
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)

  }
}
