import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {
  type:any;
  target:any;
  imgSrc:any
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }
  insuranceDescription:any='تقدم تغطيات التأمين على الممتلكات نطاقاً واسعاً من الحماية، يشمل المباني، بالإضافة إلى حماية الآلات، والمخزون، والأثاث، وغيرها، وكذلك التغطية الخاصة بخسارة الأرباح المحتملة نتيجة تلف الممتلكات  '

 
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)

  }
}
