import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-responsibilities',
  templateUrl: './responsibilities.component.html',
  styleUrls: ['./responsibilities.component.scss']
})
export class ResponsibilitiesComponent {
  type:any;
  target:any;
  imgSrc:any
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }
  
  insuranceDescription:any='التأمين الذي يوفر لك الحماية في حالات المسئولية المدنية كنتيجة مباشرة لأنشطة عملك ومسئولية المنتجات والمسئولية المهنية تغطية أعمالك ضد جميع المسؤوليات القانونية، التي قد تتحملها بسبب موظفيها، أو الأطراف المعنية الأخرى'
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)

  }
}
