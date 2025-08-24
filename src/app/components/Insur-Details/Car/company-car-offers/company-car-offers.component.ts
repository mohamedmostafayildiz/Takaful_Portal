import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarsService } from 'src/app/services/cars.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-company-car-offers',
  templateUrl: './company-car-offers.component.html',
  styleUrls: ['./company-car-offers.component.scss']
})
export class CompanyCarOffersComponent {
  AllCompanyInsurances:any;
  companyName:any
  loading:boolean=false;
  Price:any
  CarModelId:any
  CompanyId:any
  selectedFile:any
  Adventures:any
  selectedNationalId:any
  selectedCar:any
  selectedCArLicence:any
  constructor(private _CarsService:CarsService, private _ActivatedRoute:ActivatedRoute, private _ToastrService:ToastrService,private _Router:Router){
    this.Price= this._ActivatedRoute.snapshot.paramMap.get('price')
    this.CarModelId= this._ActivatedRoute.snapshot.paramMap.get('modelId')
    this.CompanyId= this._ActivatedRoute.snapshot.paramMap.get('companyId')
  }


  getAllOffers(){
    this.loading=true;
    this._CarsService.GetCompanyOffers(this.CompanyId, this.CarModelId , this.Price).subscribe((data:any)=>{
      this.loading=false;
      console.log(data);
      this.AllCompanyInsurances = data[0].insurance;
      this.companyName=data[0].company.companyName
      console.log(this.companyName);
      
      console.log(this.AllCompanyInsurances);
    },error=>{
      this.loading=false;
      console.log(error);
      Swal.fire({
        icon:'error',
        title:'',
        text:error.error
      })
    })
  }

  payment(){
    if(localStorage.getItem('UserAlcanToken')==null){
      this._ToastrService.error('يجــب عليــك تسجيــل الدخــول اولا');
      this._Router.navigate(['/login/'+this.Price+'/'+this.CarModelId+'/'+this.CompanyId])
    }else{
      $("#PersonalCarts").modal('toggle')
    }
  }

  getAdventures(Offer:any){
    this.Adventures=Offer
  }
      // Upload
  uploadNationalId(e:any){
    this.selectedNationalId=e.target.files[0] ?? null
  }
  uploadCar(e:any){
    this.selectedCar=e.target.files[0] ?? null
  }
  uploadCarLicence(e:any){
    this.selectedCArLicence=e.target.files[0] ?? null
  }
      // Submit
    isClickedImgs:boolean = false;
  async SubmitPersonalImagesUrl(){
    this.isClickedImgs = true;
    var formData = new FormData()
    formData.append('IdCard',this.selectedNationalId)
    formData.append('CarLicense',this.selectedCar)
    formData.append('PersonalDrivingLicense',this.selectedCArLicence)
    formData.append('UserId',localStorage.getItem("userId")!);
    
    this._CarsService.PersonalImagesUrl(formData).subscribe(async res=>{
      this.isClickedImgs = false;
      await $("#PersonalCarts").modal('toggle')
      await this._Router.navigate(['/WaysToPay']);
      Swal.fire({
        icon: 'success',
        title: 'Your Data Added Successfully',
        showConfirmButton: false,
        timer:2500
      })
      console.log(res);
    },error=>{
      this.isClickedImgs = false;
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: '',
      })
    })
  }
  ngOnInit(): void {
    this.getAllOffers()
  }
}
