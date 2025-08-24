import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HomeIndService } from 'src/app/services/home-ind.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent {
  CompanyId:any
  CompanyHealthInsuranceTypes:any
  loading:boolean = false;
  Form:FormGroup = new FormGroup({
    type:new FormControl('',[Validators.required]),
    datOfBirth:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
  })
  constructor(private _ActivatedRoute:ActivatedRoute, private _MedicalIndividualService:HomeIndService){
    this.CompanyId = this._ActivatedRoute.snapshot.paramMap.get('id');
  }


  // GetHomeIndById(){
  //   this.loading = true
  //   this._MedicalIndividualService.GetHomeIndById(this.CompanyId).subscribe((data:any)=>{
  //     this.loading = false
  //     console.log(data);
      
  //     this.CompanyHealthInsuranceTypes = data
  //   })
  // }

  
  ngOnInit(){
    // this.GetHomeIndById();
  }
}
