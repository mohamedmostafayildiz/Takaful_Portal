import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entire',
  templateUrl: './entire.component.html',
  styleUrls: ['./entire.component.scss']
})
export class EntireComponent {
  type:any;
  target:any;
  imgSrc:any
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }
  insuranceDescription:any='هي برامج ادخار واستثمار لموظفيك، تساعدهم على التخطيط المالي لتقاعدهم. تتم هذه العملية عن طريق ادخار مبلغ شهري من الموظفين، ويتم تجميع الأقساط واستثمارها فى صناديق وجهات استثمارية متنوعة. يمكن أيضًا للشركة والموظف أن يضيفا مبلغ معين أو نسبة محددة لتعزيز قيمة مبلغ التقاعد للموظفين'

 
  ngOnInit(): void {
    
  }
}
