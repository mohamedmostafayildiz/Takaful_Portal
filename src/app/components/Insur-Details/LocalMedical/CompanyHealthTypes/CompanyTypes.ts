import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalIndividualService } from 'src/app/services/medical-individual.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-medical-com-details',
  templateUrl: './CompanyTypes.html',
  styleUrls: ['./CompanyTypes.scss']
})
export class CompanyTypesComponent implements OnInit{
  CompanyId:any
  CompanyHealthInsuranceTypes:any
  CompanyHealthInsuranceTypesId:any
  loading:boolean = false;
  PricingDataForm:FormGroup = new FormGroup({
    type:new FormControl('',[Validators.required]),
    datOfBirth:new FormControl('',[Validators.required])
  })
  constructor(private _ActivatedRoute:ActivatedRoute, private _MedicalIndividualService:MedicalIndividualService, private _Router:Router){
    this.CompanyId = this._ActivatedRoute.snapshot.paramMap.get('id');
  }

  GetCompanyHealthInsuranceTypesByCompanyId(){
    this.loading = true
    this._MedicalIndividualService.GetCompanyHealthInsuranceTypesByCompanyId(this.CompanyId).subscribe((data:any)=>{
      this.loading = false
      console.log(data);
      
      this.CompanyHealthInsuranceTypes = data
    })
  }
  getPricingData(){
    console.log(this.PricingDataForm.value);
    let Model = Object.assign(this.PricingDataForm.value,
      {userId:localStorage.getItem("userId")},
      {medicalCompanyId:Number(this.CompanyId)},
      {companyHealthInsuranceTypesId:this.CompanyHealthInsuranceTypesId}
    )
    this._MedicalIndividualService.AddMedicalPricingData(Model).subscribe((res:any)=>{
      $("#appendexModal").modal('toggle')
      console.log(res);
      this._Router.navigate(['/MedicalInsurancePriceComponent/'+res.medicalPricingDataId])
      Swal.fire({
        title: "Good job!",       
        text: "Medical Pricing Data Added Successfully",
        icon: "success"
      });
    })
  }
  SetCompanyHealthInsuranceTypesId(id:any){
    this.CompanyHealthInsuranceTypesId= id
  }
  // medicalPricingDataId
  ngOnInit(){
    this.GetCompanyHealthInsuranceTypesByCompanyId();
    $("html , body").animate({scrollTop:0} ,0);
  }
}
