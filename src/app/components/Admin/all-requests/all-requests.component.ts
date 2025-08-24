import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.scss']
})
export class AllRequestsComponent {
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
  getApproveDecision(id:any,target:any){
    let Exist= this.ArrTest.find(item=>item.requestId ===id);
    let Model= {
      requestId:id,
      status :JSON.parse(target.value)
    }
    if(Exist==undefined){
      this.ArrTest.push(Model)
    }else{
      let Index = this.ArrTest.indexOf(Exist)
      this.ArrTest.splice(Index,1)
      this.ArrTest.push(Model)
    }
    if(target.value == 1){
      target.style.backgroundColor = '#b4d6c3';
    }else if(target.value == 2){
      target.style.backgroundColor = '#e0b3b3';
    }else if(target.value == 3){
      target.style.backgroundColor = '#888383';
    }
    console.log(this.ArrTest);
  }
  GetAllPandingRequests(){
    this.loading= true
    this._AdminService.GetAllPandingRequests().subscribe((res:any)=>{
      this.loading= false
      console.log(res);
      this.AllRequests =res
    },error=>{
      this.loading= false
      console.log(error);
    })
  }
  ChangeStatus(){
    this.isClicked = true;
    this._AdminService.ChangeStatus(this.ArrTest).subscribe((res:any)=>{
      this.isClicked= false
      this.AllRequests =res
      this.ArrTest = [];
      Swal.fire('Good job!',res,'success');
      this.GetAllPandingRequests();
    },error=>{
      this.isClicked= false
      console.log(error);
      Swal.fire({icon: 'error',title:error.error,text:''})
    })
  }
  ngOnInit(){
    this.GetAllPandingRequests();
  }
}
