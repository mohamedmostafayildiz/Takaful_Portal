import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {LottieModule} from 'ngx-lottie';
import { NgxPaginationModule } from 'ngx-pagination';
import player from 'lottie-web';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { OtpPageComponent } from './components/otp-page/otp-page.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { InsurancepageComponent } from './components/insurancepage/insurancepage.component';
import { CarinsuranceComponent } from './components/carinsurance/carinsurance.component';
export function playerFactory(){
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
      HomePageComponent,
    SignupComponent,
    LoginComponent,
    ForgetpasswordComponent,
    OtpPageComponent,
    MainpageComponent,
    InsurancepageComponent,
    CarinsuranceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    LottieModule.forRoot({player:playerFactory}),
    FontAwesomeModule,
    NgxPaginationModule,
    MatFileUploadModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    Ng2TelInputModule,
    ToastrModule.forRoot({
      progressBar:true,
      progressAnimation:'decreasing',
      timeOut: 4000
    }),
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatIconModule,
    NgxMatNativeDateModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
      })
  
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
