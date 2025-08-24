import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  loading:boolean=false;
  constructor(private _UserService:UserService, private _ActivatedRoute:ActivatedRoute){
    this.Price= this._ActivatedRoute.snapshot.paramMap.get('price');
    this.carModelId= this._ActivatedRoute.snapshot.paramMap.get('modelId');
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


  ngOnInit(): void {
    this.GetLessOffer()
  }

}
