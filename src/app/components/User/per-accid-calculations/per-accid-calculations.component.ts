import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalAccidentService } from 'src/app/services/personal-accident.service';

@Component({
  selector: 'app-per-accid-calculations',
  templateUrl: './per-accid-calculations.component.html',
  styleUrls: ['./per-accid-calculations.component.scss']
})
export class PerAccidCalculationsComponent {
  loading:boolean =false;
  HomePriceId:any
  PersonalAccident:any
  constructor(private _PersonalAccidentService:PersonalAccidentService, private _ActivatedRoute:ActivatedRoute){
    this.HomePriceId = this._ActivatedRoute.snapshot.paramMap.get('id');
  }



  GetPermiumAndTotalInstallment(){
    this.loading = true;
    this._PersonalAccidentService.GetPremiumAndTotalInstallment(this.HomePriceId).subscribe(data=>{
      this.loading = false;
      console.log(data);
      this.PersonalAccident = data; 
    },error=>{
      this.loading = true;
    })
  }

  ngOnInit(){
    this.GetPermiumAndTotalInstallment();
  }
}
