import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
declare var $:any

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.scss']
})
export class MotorcycleComponent {
  type:any;
  target:any;
  imgSrc:any
  insuranceDescription:any='برامج شاملة لحماية دراجتك النارية من مجموعة كبيرة من الاخطار. يغطي الخسائر أو الأضرار العرضية التي تلحق بدراجتك النارية المؤمن عليها بسبب خطر مؤمن عليه. يغطي مسؤوليتك تجاه أية أضرار تلحق بالغير  '
  constructor(private _ActivatedRoute:ActivatedRoute){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }
}
