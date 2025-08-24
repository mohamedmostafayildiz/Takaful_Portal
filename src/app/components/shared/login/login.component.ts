import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { ToastrService } from 'ngx-toastr';

import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  errorEsist:boolean =false;
  isClicked:boolean =false;
  Price:any
  CarModelId:any
  CompanyId:any
  response:any
  
  constructor(private _AuthService:AuthService ,private _Router:Router,private _ActivatedRoute:ActivatedRoute){
    this.Price= this._ActivatedRoute.snapshot.paramMap.get('price')
    this.CarModelId= this._ActivatedRoute.snapshot.paramMap.get('modelId')
    this.CompanyId= this._ActivatedRoute.snapshot.paramMap.get('companyId')
  }

    loginForm:FormGroup =new FormGroup({
      'user':new FormControl('',[Validators.required]),
      'phoneNumber':new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(22)]),
    });

    // Submit User Login
  submitLoginForm(){
      // $("#verification").show(400)
      //  Swal.fire({
      //   icon: 'success',
      //   title: 'Added Successfully',
      // });
      this.isClicked = true;
      this._AuthService.UserLogin(this.loginForm.value).subscribe((res:any)=>{
        this.isClicked = false;
        $("#verification").show(400)
        this.response= res
        console.log(this.response);
        
      },error=>{
        this.isClicked = false;
        console.log(error);
        Swal.fire({
          icon:'error',
          title:'',
          text:error.error
        })
      })
    }
  async submitVerificationCode(){
    localStorage.setItem('UserAlcanToken',this.response.token)
    localStorage.setItem('AlcanResponse',JSON.stringify(this.response))
        localStorage.setItem('userId',this.response.userId)
    if(this.Price !=null){
        await this._Router.navigate(['/CarLeastOffer/'+'/'+this.Price+'/'+this.CarModelId+'/'+this.CompanyId])
        window.location.reload()

    }else{
    await this._Router.navigate(['/Dashboard'])
       window.location.reload()

    }
  }

  signUp(){
    if(this.Price !=null){
      this._Router.navigate(['/signUp/'+'/'+this.Price+'/'+this.CarModelId+'/'+this.CompanyId])
    }else{
      this._Router.navigate(['/signUp'])
    }
  }
login:AnimationOptions={
  path:'assets/imgs/login.json'
}

ngOnInit(): void {
  $("html , body").animate({scrollTop:0} ,0)

}
}
