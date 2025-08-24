import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalIndividualService } from 'src/app/services/medical-individual.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-medical-insurance-price',
  templateUrl: './medical-insurance-price.component.html',
  styleUrls: ['./medical-insurance-price.component.scss']
})
export class MedicalInsurancePriceComponent implements OnInit{
  MedicalPricingDataId:any
  premium:any
  loading:boolean =false;
  constructor(private _ActivatedRoute:ActivatedRoute, private _MedicalIndividualService:MedicalIndividualService,private Location:Location){
    this.MedicalPricingDataId = this._ActivatedRoute.snapshot.paramMap.get('id');
  }




  GetMedicalInsurancePrice(){
    this.loading = true
    this._MedicalIndividualService.GetMedicalInsurancePrice(Number(this.MedicalPricingDataId)).subscribe((data:any)=>{
      this.loading = false;
      console.log(data);
      this.premium= data.premium
    },error=>{
      console.log(error);
      this.loading = true;
    })
  }
  goBack(){
    this.Location.back()
  }
  ngOnInit(){
    this.GetMedicalInsurancePrice()
  }

}
