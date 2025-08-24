import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalIndividualService } from 'src/app/services/medical-individual.service';

@Component({
  selector: 'app-place-of-treatment-details',
  templateUrl: './place-of-treatment-details.component.html',
  styleUrls: ['./place-of-treatment-details.component.scss']
})
export class PlaceOfTreatmentDetailsComponent implements OnInit{
  PlaceId:any
  TypeId:any
  PlaceOfTreatmentDetails:any
  loading:boolean = false
  constructor(private _MedicalIndividualService:MedicalIndividualService,private _ActivatedRoute:ActivatedRoute){
    this.PlaceId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.TypeId = this._ActivatedRoute.snapshot.paramMap.get('type');
  }


  GetDetailsOfOnePlaceTreatmentByType(){
    this.loading = true;
    this._MedicalIndividualService.GetDetailsOfOnePlaceTreatmentByType(this.PlaceId, this.TypeId).subscribe(data=>{
      this.loading = false;
      console.log(data);
      this.PlaceOfTreatmentDetails = data
    },error=>{
      console.log(error);
      this.loading = true;
    })
  }

  ngOnInit(){
    this.GetDetailsOfOnePlaceTreatmentByType()
  }
}
