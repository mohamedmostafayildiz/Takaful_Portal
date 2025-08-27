import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { OtpPageComponent } from './components/otp-page/otp-page.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { InsurancepageComponent } from './components/insurancepage/insurancepage.component';



const routes: Routes = [
  //new routes
   { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: 'homepage',component: HomePageComponent},
   {path: 'signup',component: SignupComponent},
   {path: 'login',component: LoginComponent},
   {path: 'forgetpassword',component: ForgetpasswordComponent},
   {path: 'otppage', component: OtpPageComponent},
   {path: 'mainpage', component: MainpageComponent},
   {path:'insurancepage', component:InsurancepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
