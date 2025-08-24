import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeIndService } from 'src/app/services/home-ind.service';

@Component({
  selector: 'app-home-calculations',
  templateUrl: './home-calculations.component.html',
  styleUrls: ['./home-calculations.component.scss']
})
export class HomeCalculationsComponent implements OnInit{
  loading:boolean =false;
  HomePriceId:any
  HomeCalculationas:any
  constructor(private _HomeIndService:HomeIndService, private _ActivatedRoute:ActivatedRoute){
    this.HomePriceId = this._ActivatedRoute.snapshot.paramMap.get('id');
  }



  GetPermiumAndTotalInstallment(){
    this.loading = true;
    this._HomeIndService.GetPermiumAndTotalInstallment(this.HomePriceId).subscribe(data=>{
      this.loading = false;
      console.log(data);
      this.HomeCalculationas = data; 
    },error=>{
      this.loading = true;
    })
  }

  ngOnInit(){
    this.GetPermiumAndTotalInstallment();
  }
}
