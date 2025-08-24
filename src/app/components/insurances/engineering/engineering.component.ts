import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.scss']
})
export class EngineeringComponent {
  type:any;
  target:any;
  imgSrc:any
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }
  insuranceDescription:any=' تغطي خدمات التأمين الهندسي عدة قطاعات حيوية كثيرة مثل: الطاقة والمرافق العامة والنفط والغاز، المشاريع البرية وتحت الإنشاء، مشاريع الإنشاءات والبنى التحتية الأولية، الصناعات الثقيلة ومشاريع الهندسة المدنية الكبرى، أنظمة النقل بما في ذلك الآلات والمعدات.   جميع أخطار المقاولين. جميع أخطار التركيب. عطل الماكينات (MBD) تلف المخزون (بسبب عطل الماكينات) المعدات الإلكترونية كسر الزجاج'

 
  ngOnInit(): void {
    
  }
}
