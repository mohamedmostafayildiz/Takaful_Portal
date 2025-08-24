import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalIndividualService } from 'src/app/services/medical-individual.service';

@Component({
  selector: 'app-pleaces-of-treatment',
  templateUrl: './pleaces-of-treatment.component.html',
  styleUrls: ['./pleaces-of-treatment.component.scss']
})
export class PleacesOfTreatmentComponent {
  loading:boolean = false
  AllPlaceOfTretment:any
  CompanyId:any
  Type:any
  constructor( private _MedicalIndividualService:MedicalIndividualService, private _ActivatedRoute:ActivatedRoute){
    this.CompanyId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.Type = this._ActivatedRoute.snapshot.paramMap.get('type');
  }

  GetAllPlaceOfTretment(id:any){
    this.loading = true
    this._MedicalIndividualService.GetAllPlaceOfTretment(id).subscribe(data=>{
      this.loading = false
      console.log(data);
      this.AllPlaceOfTretment = data
    })
  }
  ngOnInit(){
    this.GetAllPlaceOfTretment(this.CompanyId);
  }
}
