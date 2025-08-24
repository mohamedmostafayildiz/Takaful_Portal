import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accepted-policies',
  templateUrl: './accepted-policies.component.html',
  styleUrls: ['./accepted-policies.component.scss']
})
export class AcceptedPoliciesComponent {
Price:any
  carModelId:any
  itemDetails:any
  isLoading:boolean =false;
  isClicked:boolean =false;
  ArrTest:any[]=[]
  AllRequests:any[]=[]
  loading:boolean=false;
  constructor(private _UserService:UserService, private _ActivatedRoute:ActivatedRoute,private _AdminService:AdminService){
    this.Price= this._ActivatedRoute.snapshot.paramMap.get('price');
    this.carModelId= this._ActivatedRoute.snapshot.paramMap.get('modelId');
  }

  GetAllAccepted(){
    this.loading= true
    this._UserService.GetAllAccepted().subscribe((res:any)=>{
      this.loading= false
      console.log(res);
      this.AllRequests =res
    },error=>{
      this.loading= false
      console.log(error);
    })
  }
  ngOnInit(){
    this.GetAllAccepted();
  }
}
