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
import { MaterialsModule } from './materials/materials.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { LoginComponent } from './components/shared/login/login.component';
import { SearchPipe } from './pipes/search.pipe';
import {MatIconModule} from '@angular/material/icon'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { HomeComponent } from './components/main/home/home.component';
import { CompensationComponent } from './components/main/compensation/compensation.component';
import { CustomerProtectionComponent } from './components/main/customer-protection/customer-protection.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { AboutComponent } from './components/main/about/about.component';
import { LocalMedicalComponent } from './components/insurances/LocalMedical/localMedical.component'; 
import { LeastPriceComponent } from './components/main/least-price/least-price.component';
import { OffersComponent } from './components/main/offers/offers.component';
import { PaymentDetialsComponent } from './components/main/payment-detials/payment-detials.component';
import { SignUpComponent } from './components/shared/sign-up/sign-up.component';
import { UserProfileComponent } from './components/main/user-profile/user-profile.component';
import { PreviewerReportComponent } from './components/Previewer/previewer-report/previewer-report.component';
import { AllAccidentsComponent } from './components/Admin/all-accidents/all-accidents.component';
import { CompanyTypesComponent } from './components/Insur-Details/LocalMedical/CompanyHealthTypes/CompanyTypes';
import { PleacesOfTreatmentComponent } from './components/Insur-Details/LocalMedical/pleaces-of-treatment/pleaces-of-treatment.component';
import { PlaceOfTreatmentDetailsComponent } from './components/Insur-Details/LocalMedical/place-of-treatment-details/place-of-treatment-details.component';
import { AllHomeCompaniesComponent } from './components/Home-Ind/all-home-companies/all-home-companies.component';
import { HomeDetailsComponent } from './components/Home-Ind/home-details/home-details.component';
import { HomeCalculationsComponent } from './components/Home-Ind/home-calculations/home-calculations.component';
import { PerAccidCalculationsComponent } from './components/PersonalAccident/per-accid-calculations/per-accid-calculations.component';
import { MedicalInsurancePriceComponent } from './components/Insur-Details/LocalMedical/medical-insurance-price/medical-insurance-price.component';
import { SelectInsurancesComponent } from './components/insurances/SelectInsurances/select-insurances.component';
import { GlobalMedicalComponent } from './components/insurances/global-medical/global-medical.component';
import { LifeComponent } from './components/insurances/life/life.component';
import { PersonalAccidentsComponent } from './components/insurances/personal-accidents/personal-accidents.component';
import { ProplemsComponent } from './components/proplems/proplems.component';
import { ElwstaaComponent } from './components/elwstaa/elwstaa.component';
import { RequestsComponent } from './components/requests/requests.component';
import { WzaafComponent } from './components/wzaaf/wzaaf.component';
import { ElostaaaComponent } from './components/elostaaa/elostaaa.component';
import { WazaafaaComponent } from './components/wazaafaa/wazaafaa.component';
import { ForgetpasswordComponent } from './components/Auth/forgetpassword/forgetpassword.component';
import { ChecknumberComponent } from './components/Auth/checknumber/checknumber.component';
import { BlogAlkanComponent } from './components/blog-alkan/blog-alkan.component';
import { MAinAccountComponent } from './components/main-account/main-account.component';
import { MAinAccount2Component } from './components/main-account2/main-account2.component';
import { CartdetailsComponent } from './components/cartdetails/cartdetails.component';
import { WaystopayComponent } from './components/Pay/waystopay/waystopay.component';
import { TakafulComponent } from './components/insurances/takaful/takaful.component';
import { CarsComponent } from './components/insurances/cars/cars.component';
import { PropertiesComponent } from './components/insurances/properties/properties.component';
import { ShipsComponent } from './components/insurances/ships/ships.component';
import { TradeCreditComponent } from './components/insurances/trade-credit/trade-credit.component';
import { MoneyComponent } from './components/insurances/money/money.component';
import { ResponsibilitiesComponent } from './components/insurances/responsibilities/responsibilities.component';
import { EngineeringComponent } from './components/insurances/engineering/engineering.component';
import { TransportComponent } from './components/insurances/transport/transport.component';
import { EntireComponent } from './components/insurances/entire/entire.component';
import { MotorcycleComponent } from './components/insurances/motorcycle/motorcycle.component';
import { HomeProtectionComponent } from './components/insurances/home/home.component';
import { RequestComponent } from './components/request/request.component';
import { HomeprotectioncompensationComponent } from './components/homeprotectioncompensation/homeprotectioncompensation.component';
import { PersonalaccidentcompensationComponent } from './components/personalaccidentcompensation/personalaccidentcompensation.component';
import { CaraccidentcompensationComponent } from './components/caraccidentcompensation/caraccidentcompensation.component';
import { CaraccidentComponent } from './components/caraccident/caraccident.component';
import { OurserviceComponent } from './components/ourservice/ourservice.component';
import { Ourservice2Component } from './components/ourservice2/ourservice2.component';
import { ForbiddenComponent } from './components/shared/forbidden/forbidden.component';
import { CompanyCarOffersComponent } from './components/Insur-Details/Car/company-car-offers/company-car-offers.component';
import { CarLeastPrice } from './components/Insur-Details/Car/CarLeastPrice/CarLeastPrice.component';
import { AllRequestsComponent } from './components/Admin/all-requests/all-requests.component';
import { ReviewedRequestsComponent } from './components/Previewer/reviewed-requests/reviewed-requests.component';
import { PreviewedRequestsComponent } from './components/Previewer/previewed-requests/previewed-requests.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { AllClaimsComponent } from './components/Admin/all-claims/all-claims.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { ProductsComponent } from './components/User/products/products.component';
import { AcceptedPoliciesComponent } from './components/User/accepted-policies/accepted-policies.component';
// import { DragScrollComponent } from 'ngx-drag-scroll';
// import { DragScrollDirective } from './ngx-drag-scroll-item';
export function playerFactory(){
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SpinnerComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    SearchPipe,
    HomeComponent,
    CompensationComponent,
    CustomerProtectionComponent,
    ContactUsComponent,
    AboutComponent,
    LocalMedicalComponent,
    LeastPriceComponent,
    OffersComponent,
    PaymentDetialsComponent,
    SignUpComponent,
    UserProfileComponent,
    PreviewerReportComponent,
    AllAccidentsComponent,
    CompanyTypesComponent,
    PleacesOfTreatmentComponent,
    PlaceOfTreatmentDetailsComponent,
    AllHomeCompaniesComponent,
    HomeDetailsComponent,
    HomeCalculationsComponent,
    PerAccidCalculationsComponent,
    MedicalInsurancePriceComponent,
    SelectInsurancesComponent,
    GlobalMedicalComponent,
    LifeComponent,
    PersonalAccidentsComponent,
    ProplemsComponent,
    ElwstaaComponent,
    RequestsComponent,
    WzaafComponent,
    ElostaaaComponent,
    WazaafaaComponent,
    ForgetpasswordComponent,
    ElostaaaComponent,
    WazaafaaComponent,
ProductsComponent,
    ChecknumberComponent,
    BlogAlkanComponent,
    MAinAccountComponent,
    MAinAccount2Component,
    CartdetailsComponent,
    WaystopayComponent,
    ForbiddenComponent,
    TakafulComponent,
    CarsComponent,
    PropertiesComponent,
    ShipsComponent,
    TradeCreditComponent,
    MoneyComponent,
    ResponsibilitiesComponent,
    EngineeringComponent,
    TransportComponent,
    EntireComponent,
    MotorcycleComponent,
    HomeProtectionComponent,
    RequestComponent,
    HomeprotectioncompensationComponent,
    PersonalaccidentcompensationComponent,
    CaraccidentcompensationComponent,
    CaraccidentComponent,
    OurserviceComponent,
    Ourservice2Component,
    CompanyCarOffersComponent,
    // DragScrollComponent,
    CarLeastPrice,
    AllRequestsComponent,
    ReviewedRequestsComponent,
    PreviewedRequestsComponent,
    AllClaimsComponent,
    DashboardComponent,
    AcceptedPoliciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
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
