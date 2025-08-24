import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-least-price',
  templateUrl: './least-price.component.html',
  styleUrls: ['./least-price.component.scss']
})
export class LeastPriceComponent implements OnInit{
  Price:any
  carModelId:any
  LessOffers:any
  CashedInputs:any
  loading:boolean=false;
  constructor(private _UserService:UserService, private _ActivatedRoute:ActivatedRoute, private _Router:Router) {
    this.Price= this._ActivatedRoute.snapshot.paramMap.get('price');
    this.carModelId= this._ActivatedRoute.snapshot.paramMap.get('modelId');
    this._ActivatedRoute.queryParams.subscribe((data:any)=>{
      this.CashedInputs = data
      console.log(data);
    });
  }

  GetLessOffer(){
    this.loading=true
    this._UserService.getLessOffer(this.carModelId).subscribe(data=>{
      this.loading=false
      console.log(data);
      this.LessOffers =data
    },error=>{
      console.log(error);
      this.loading=false
    })
  }

  offers(CompanyId:any){
    this._Router.navigate(['/Offers/'+this.Price+'/'+this.carModelId+'/'+CompanyId],{queryParams:this.CashedInputs})
  }
  ngOnInit(): void {
    this.GetLessOffer()
  }

}
