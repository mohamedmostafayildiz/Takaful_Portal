import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-claims',
  templateUrl: './all-claims.component.html',
  styleUrls: ['./all-claims.component.scss']
})
export class AllClaimsComponent {
  itemDetails:any
  isLoading:boolean =false;
  ArrTest:any[]=[]
  AllRequests:any[]=[
    {name:'مجدي المهدي',phone:'01129556404',policyNumber:'20/Q/2025',type:'Motor',location:"شارع نبيل الوقاد - ارض الجولف - مصر الجديده - مدينه نصر",notes:"بعض التفاصيل الهامه هنا .."},
    {name:'محمد علي',phone:'01068889524',policyNumber:'22/Q/2025',type:'Motor',location:'',notes:'التفاصيل اللازمه'},
    {name:'سعد حامد',phone:'01556998525',policyNumber:'23/Q/2025',type:'Motor',location:'مصر الجديده',notes:'سنه الاصدار 2000'},
    {name:'اسراء عماد الدين',phone:'01035558721',policyNumber:'24/Q/2025',type:'Motor',location:'مصر الجديده',notes:'بعض الملاحظات'},
    {name:'أنور بهاء',phone:'01126559487',policyNumber:'25/Q/2025',type:'Motor',location:'مصر الجديده',notes:'بعض الملاحظات'}
  ]
  loading:boolean=false;
  constructor(){
  }


  ngOnInit(){
  }
}
