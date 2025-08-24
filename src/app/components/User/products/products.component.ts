import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeIndService } from 'src/app/services/home-ind.service';
import { MedicalIndividualService } from 'src/app/services/medical-individual.service';
import { PersonalAccidentService } from 'src/app/services/personal-accident.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
declare var $:any

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  type:any;
  AllBrands:any
  carModelId:any
  HomeCompanyId:any
  imgSrc:any="../.././../../assets/imgs/think.svg"
  insuranceDescription:any=''
  carModels:any[]=[]
  AllCompaies:any
  AllHomeCompanies:any
  AllPersonalCompaies:any
  personalAccidentPrice:any
  personalAccidentCompanyId:any
  OtherInsuranceTypes:any[]=[
    {
      name:"بحـري",
      desc:"No Data Yet About this",
      image:"../../../../assets/imgs/ship.svg"
    },
    {
      name:"سيــارات جماعــي",
      desc:"No Data Yet",
      image:"../../../../assets/imgs/carGroup.svg"
    },
    {
      name:"طبــي جماعــي",
      desc:"خطة حماية ليك وللموظفين بشركتك بما يزيد عن 50 موظف لتخفيف الأعباء المتوقعة نتيجة المرض بدل ما تفكر فى شركة التأمين الأنسب، احنا هنفكر لك و نوضحلك أفضل عروض من شركات التأمين المتنوعة وفقا للتغطيات المطلوبة لشركتك",
      image:"../../../../assets/imgs/individual_Medical.svg"
    },
    {
      name:"سكــن جماعــي",
      desc:"No Data Yet",
      image:"../../../../assets/imgs/indiviudal_Home.svg"
    },
    {
      name:"حريـق",
      desc:"التفاصيل عن تامينات الحرائق والجروح ",
      image:"../../../../assets/imgs/fire-prevention.svg"
    },
    
  ]
  individualInsurance:any

  constructor(private _UserService:UserService, private _Router:Router, private _MedicalIndividualService:MedicalIndividualService
    ,private _HomeIndService:HomeIndService,private _PersonalAccidentService:PersonalAccidentService){}

  AddCarForm:FormGroup= new FormGroup({
    'brand':new FormControl(''),
    'model':new FormControl(''),
    'manufacturingYear':new FormControl(''),
    'carPrice':new FormControl('')
  })
  BuildingForm:FormGroup= new FormGroup({
    'priceOfBuildings':new FormControl(''),
    'priceOfTheContentOfBuilding':new FormControl('')
  })



  getCarsBrands(){
    this._UserService.getAllCarsInfo().subscribe(data=>{
      this.AllBrands=data
      console.log(data);
      
    },error=>{
      console.log(error);
      
    })
  }
  getCarModels(Models:any){
    $("#carModels").show(400)
    console.log(Models);
    this.carModels=Models
  }
  getcarModel(e:any){
    $("#ManFacturingYear").show(400)
    console.log(e);
    let Exisit= this.carModels.find(item=>item.modelName==e.value)
    this.carModelId=Exisit.carModelId
    console.log(this.carModelId);
    
  }
  getcarManfacturingYear(e:any){
    $("#carPrice").show(400)
    $("#carSubmit").show(400)
    console.log(e);
  }
      // Submit New Car
  SubmitAddCar(){
    let Model =Object.assign(this.AddCarForm.value,{userId:localStorage.getItem('userId')},)
    console.log(Model);
    this._UserService.AddNewCar(Model).subscribe(async (res:any)=>{
      console.log(res);
      // this._Router.navigate(['/LeastPrice/'+res.carPrice+'/'+this.carModelId])
      await this._Router.navigate(['/LeastPrice/'+res.carPrice+'/'+this.carModelId],{queryParams:this.AddCarForm.value})
      Swal.fire('Good Job!','Your Data Added Successfully','success');
    },error=>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
    })
  }
  changeTitleImg(imgSrc:any){
    this.imgSrc = imgSrc
  }
  getDetaials(des:any , img:any){
    this.imgSrc =img
    this.insuranceDescription = des
    console.log(this.insuranceDescription);
    
  }
  /////////////////////////// Meical  //////////
  getMedicalCompany(value:any){
    // console.log(value);
    this._Router.navigate(['/CompanyHilthTypes/'+value])
  }
  
  getAllMedicalCompanies(){
    this._MedicalIndividualService.getAllMedicalCompanies().subscribe(data=>{
      console.log(data);
      this.AllCompaies = data;
    })
  }
  // ///////////////// Home /////////////
  GetAllHomeCompanies(){
    this._HomeIndService.GetAllHomeCompanies().subscribe(data=>{
      this.AllHomeCompanies= data
      console.log(data);
      
    })
  }
  getHomeIndCompany(value:any){
    $("#BuildingInptuts").show(600)
    this.HomeCompanyId = value
    this.BuildingForm.reset()
  }
  getBuildingForm(){
    let Model = Object.assign(this.BuildingForm.value,
      {userId:localStorage.getItem('userId')},
      {homeCompanyId:this.HomeCompanyId}
      )
    console.log(Model);
    this._HomeIndService.addHomePrice(Model).subscribe((res:any)=>{
      console.log(res);
      this._Router.navigate(['/HomeCalculations/'+res.id])
    })
  }
  ////////////// حوادث شخصيه  //////////////////-->
  GetAllPersonalAccidentCompany(){
    this._PersonalAccidentService.GetAllPersonalAccidentCompany().subscribe(data=>{
      console.log(data);
      this.AllPersonalCompaies= data
    })
    // AllPersonalCompaies
  }
  getpersonalAccidentCompany(value:any){
    $("#PersonalAccidentInptuts").show(600)
    this.personalAccidentCompanyId = value
    this.personalAccidentPrice = ''
  }
  getPersonalPrice(){
    let Model = Object.assign(
      {price:this.personalAccidentPrice},
      {userId:localStorage.getItem('userId')},
      {personalAccidentCompanyId:this.personalAccidentCompanyId}
      )
    console.log(Model);
    this._PersonalAccidentService.PersonalAccidentPrice(Model).subscribe((res:any)=>{
      console.log(res);
      this._Router.navigate(['/PersonalAccidentCalcualtions/'+res.id])
    })
    
  }
  ngOnInit(): void {
    this.getCarsBrands()
    this.getAllMedicalCompanies()
    this.GetAllHomeCompanies()
    this.GetAllPersonalAccidentCompany()
  }
}
