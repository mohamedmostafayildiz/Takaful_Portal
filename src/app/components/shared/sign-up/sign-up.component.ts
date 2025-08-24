import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
 
  errorEsist:boolean =false;
  isClicked:boolean =false;
  Roles:any;
  errorMsg:any
  selectedRoleValue:any;
  selectedGenderValue:any
  Price:any
  CarModelId:any
  CompanyId:any
  constructor(private _AuthService:AuthService, private _Router:Router, public _ToastrService:ToastrService,private _ActivatedRoute:ActivatedRoute){
    this.Price= this._ActivatedRoute.snapshot.paramMap.get('price')
    this.CarModelId= this._ActivatedRoute.snapshot.paramMap.get('modelId')
    this.CompanyId= this._ActivatedRoute.snapshot.paramMap.get('companyId')
  }

SignUPForm:FormGroup =new FormGroup({
      'firstName':new FormControl('احمد',),
      'lastName':new FormControl('علي'),
      'userName':new FormControl('',[Validators.required]),
      'email':new FormControl('test@gmail.com'),
      'RegWay':new FormControl('Web'),
      'phoneNumber':new FormControl('',[Validators.required,Validators.minLength(3)]),
});

  submitSignUpForm(){
      this.isClicked=true;
      console.log(this.SignUPForm.value);
      
      this._AuthService.signUp(this.SignUPForm.value).subscribe((res:any) =>{
        console.log(res);
      this.isClicked=false;
      
      Swal.fire(
        'جيد جدا',
        "تم تسجيل الحساب بنجاح ",
        'success'
      )
      if(this.Price !=null){
        this._Router.navigate(['/login/'+'/'+this.Price+'/'+this.CarModelId+'/'+this.CompanyId])
      }else{
        this._Router.navigate(['/login'])
      }
      },error=>{
      this.errorMsg=error.error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
      this._ToastrService.error(this.errorMsg, "Error Eccurred");
        this.errorEsist =true;
        this.isClicked=false;
        console.log(error);
      })
    }


  signup1:AnimationOptions={
    path:'assets/imgs/signup1.json'
  }
  ngOnInit(): void {

  }
}
