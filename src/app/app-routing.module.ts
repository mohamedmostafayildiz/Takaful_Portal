import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { ForbiddenComponent } from './components/shared/forbidden/forbidden.component';
import { HomeComponent } from './components/main/home/home.component';
import { CompensationComponent } from './components/main/compensation/compensation.component';
import { AboutComponent } from './components/main/about/about.component';
import { LocalMedicalComponent } from './components/insurances/LocalMedical/localMedical.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { CustomerProtectionComponent } from './components/main/customer-protection/customer-protection.component';
import { PaymentDetialsComponent } from './components/main/payment-detials/payment-detials.component';
import { OffersComponent } from './components/main/offers/offers.component';
import { LeastPriceComponent } from './components/main/least-price/least-price.component';
import { SignUpComponent } from './components/shared/sign-up/sign-up.component';
import { UserProfileComponent } from './components/main/user-profile/user-profile.component';
import { PreviewerReportComponent } from './components/Previewer/previewer-report/previewer-report.component';
import { AllAccidentsComponent } from './components/Admin/all-accidents/all-accidents.component';
import { PleacesOfTreatmentComponent } from './components/Insur-Details/LocalMedical/pleaces-of-treatment/pleaces-of-treatment.component';
import { CompanyTypesComponent } from './components/Insur-Details/LocalMedical/CompanyHealthTypes/CompanyTypes';
import { PlaceOfTreatmentDetailsComponent } from './components/Insur-Details/LocalMedical/place-of-treatment-details/place-of-treatment-details.component';
import { HomeDetailsComponent } from './components/Home-Ind/home-details/home-details.component';
import { HomeCalculationsComponent } from './components/Home-Ind/home-calculations/home-calculations.component';
import { PerAccidCalculationsComponent } from './components/PersonalAccident/per-accid-calculations/per-accid-calculations.component';
import { MedicalInsurancePriceComponent } from './components/Insur-Details/LocalMedical/medical-insurance-price/medical-insurance-price.component';
import { SelectInsurancesComponent } from './components/insurances/SelectInsurances/select-insurances.component';
import { GlobalMedicalComponent } from './components/insurances/global-medical/global-medical.component';
import { LifeComponent } from './components/insurances/life/life.component';
import { PersonalAccidentsComponent } from './components/insurances/personal-accidents/personal-accidents.component';
import { ElwstaaComponent } from './components/elwstaa/elwstaa.component';
import { RequestsComponent } from './components/requests/requests.component';
import { WzaafComponent } from './components/wzaaf/wzaaf.component';
import { WazaafaaComponent } from './components/wazaafaa/wazaafaa.component';
import { ElostaaaComponent } from './components/elostaaa/elostaaa.component';
import { ForgetpasswordComponent } from './components/Auth/forgetpassword/forgetpassword.component';
import { ChecknumberComponent } from './components/Auth/checknumber/checknumber.component';
import { BlogAlkanComponent } from './components/blog-alkan/blog-alkan.component';
import { MAinAccountComponent } from './components/main-account/main-account.component';
import { MAinAccount2Component } from './components/main-account2/main-account2.component';
import { CartdetailsComponent } from './components/cartdetails/cartdetails.component';
import { WaystopayComponent } from './components/Pay/waystopay/waystopay.component';
import { ProplemsComponent } from './components/proplems/proplems.component';
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
import { HomeprotectioncompensationComponent } from './components/homeprotectioncompensation/homeprotectioncompensation.component';
import { HomeprotectionComponent } from './components/homeprotection/homeprotection.component';
import { PersonalaccidentcompensationComponent } from './components/personalaccidentcompensation/personalaccidentcompensation.component';
import { PersonalaccidentsComponent } from './components/personalaccidents/personalaccidents.component';
import { CaraccidentcompensationComponent } from './components/caraccidentcompensation/caraccidentcompensation.component';
import { CaraccidentComponent } from './components/caraccident/caraccident.component';
import { RequestComponent } from './components/request/request.component';
import { OurserviceComponent } from './components/ourservice/ourservice.component';
import { Ourservice2Component } from './components/ourservice2/ourservice2.component';
import { CarLeastPrice } from './components/Insur-Details/Car/CarLeastPrice/CarLeastPrice.component';
import { CompanyCarOffersComponent } from './components/Insur-Details/Car/company-car-offers/company-car-offers.component';
import { AllRequestsComponent } from './components/Admin/all-requests/all-requests.component';
import { PreviewedRequestsComponent } from './components/Previewer/previewed-requests/previewed-requests.component';
import { AllClaimsComponent } from './components/Admin/all-claims/all-claims.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { ProductsComponent } from './components/User/products/products.component';
import { AcceptedPoliciesComponent } from './components/User/accepted-policies/accepted-policies.component';



const routes: Routes = [

  
  {path:'',component:LoginComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'CustomerProtection',component:CustomerProtectionComponent},
  {path:'login/:price/:modelId/:companyId',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'signUp/:price/:modelId/:companyId',component:SignUpComponent},
  {path:'Compensation',component:CompensationComponent},
  {path:'LeastPrice/:price/:modelId',component:LeastPriceComponent},
  {path:'Offers/:price/:modelId/:companyId',component:OffersComponent},
  {path:'PaymnetDetails',component:PaymentDetialsComponent},
  {path:'UserProfile',component:UserProfileComponent},

              // Admin 
  {path:'AllAccidents',component:AllAccidentsComponent},
  {path:'AllRequests',component:AllRequestsComponent},
  {path:'AllClaims',component:AllClaimsComponent},
              // User 
  {path:'AcceptedPolicies',component:AcceptedPoliciesComponent},

              // Previewer
  {path:'PreviewerReport',component:PreviewerReportComponent},
  {path:'PreviewedRequests',component:PreviewedRequestsComponent},

  
              // Medical
  {path:'CompanyHilthTypes/:id',component:CompanyTypesComponent},
  {path:'PleacesOfTreatment/:id/:type',component:PleacesOfTreatmentComponent},
  {path:'PlaceOfTreatmentDetails/:id/:type',component:PlaceOfTreatmentDetailsComponent},
  {path:'MedicalInsurancePriceComponent/:id',component:MedicalInsurancePriceComponent},
              // Home
  {path:'HomeDetails/:id',component:HomeDetailsComponent},
  {path:'HomeCalculations/:id',component:HomeCalculationsComponent},
              // Personal Accident 
  {path:'PersonalAccidentCalcualtions/:id',component:PerAccidCalculationsComponent},
              // Insurances
  {path:'SelectInsurances/:type',component:SelectInsurancesComponent},
  {path:'LocalMedical/:type/:target',component:LocalMedicalComponent},
  {path:'GlobalMedical/:type/:target',component:GlobalMedicalComponent},
  {path:'Life/:type/:target',component:LifeComponent},
  {path:'PersonalAccidents/:type/:target',component:PersonalAccidentsComponent},
  {path:'Cars/:type/:target',component:CarsComponent},
  {path:'Properties/:type/:target',component:PropertiesComponent},
  {path:'Ships/:type/:target',component:ShipsComponent},    
  {path:'TradeCredit/:type/:target',component:TradeCreditComponent},    
  {path:'Money/:type/:target',component:MoneyComponent},    
  {path:'Responsibilities/:type/:target',component:ResponsibilitiesComponent},    
  {path:'Engineering/:type/:target',component:EngineeringComponent},    
  {path:'Transport/:type/:target',component:TransportComponent},    
  {path:'Entire/:type/:target',component:EntireComponent},    
  {path:'Motorcycle/:type/:target',component:MotorcycleComponent},    
  {path:'HomeProtection/:type/:target',component:HomeProtectionComponent},    
  {path:'Takaful',component:TakafulComponent},
  // Car Insurances
  {path:'CarLeastPrice/:price/:modelId',component:CarLeastPrice},
  {path:'CarLeastOffer/:price/:modelId/:companyId',component:CompanyCarOffersComponent},
  
  {path:'Proplems',component:ProplemsComponent},
  //page1
  {path:'Elostaa',component:ElwstaaComponent},
  //Requests
  {path:'request',component:RequestComponent},
  {path:'ReQuests',component:RequestsComponent},
  //page1
  {path:'ApplyJob',component:WzaafComponent},
  //page2
  {path:'Brokers',component:ElostaaaComponent},
  //page2
  {path:'CurrentJobs',component:WazaafaaComponent},
  //account
  {path:'ForgetPassword',component:ForgetpasswordComponent},
  {path:'checkPassword',component:ChecknumberComponent},
  //Blog Alkan
  {path:'BlogAlkan',component:BlogAlkanComponent},
  //MainAccountComponant
  {path:'MainAccount',component:MAinAccountComponent},
  {path:'MainAccount2',component:MAinAccount2Component},
  //CartDetails Componant
  {path:'CartDetails',component:CartdetailsComponent},
  //Ways to pay componant
  {path:'WaysToPay',component:WaystopayComponent},


  //HomePortectionReQuests
  {path:'Homeprotectioncompensation',component:HomeprotectioncompensationComponent},
  //homme protection
  {path:'HomeProteection',component:HomeprotectionComponent},
  
  //Personal accident compensation
  {path:'Personalaccidentcompensation',component:PersonalaccidentcompensationComponent},
  //Personal Accidents
  {path:'PersonaAccident',component:PersonalaccidentsComponent},
  //Car accident compensation
  {path:'CarAccidentCompensation',component:CaraccidentcompensationComponent},
  //Car Accident
  {path:'CarAccidents',component:CaraccidentComponent},
  {path:'OurService',component:OurserviceComponent},
  //our Service2
  {path:'OurService2',component:Ourservice2Component},

  {path:'OurProducts',component:ProductsComponent},
            // Medical
  {path:'CompanyHilthTypes/:id',component:CompanyTypesComponent},
  // {path:'PleacesOfTreatment/:id/:type',component:PleacesOfTreatmentComponent},
  // {path:'PlaceOfTreatmentDetails/:id/:type',component:PlaceOfTreatmentDetailsComponent},
  // {path:'MedicalInsurancePriceComponent/:id',component:MedicalInsurancePriceComponent},
  //             // Home
  // {path:'HomeDetails/:id',component:HomeDetailsComponent},
  // {path:'HomeCalculations/:id',component:HomeCalculationsComponent},
  //             // Personal Accident 
  // {path:'PersonalAccidentCalcualtions/:id',component:PerAccidCalculationsComponent},
  //             // Insurances
  // {path:'SelectInsurances/:type',component:SelectInsurancesComponent},
  
  {path:'**',component:ForbiddenComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
