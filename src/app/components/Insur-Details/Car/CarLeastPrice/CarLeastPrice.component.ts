import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cars',
  templateUrl: './CarLeastPrice.component.html',
  styleUrls: ['./CarLeastPrice.component.scss']
})
export class CarLeastPrice {
  Price:any
  carModelId:any
  LessOffers:any
  loading:boolean=false;
  constructor(private _CarsService:CarsService, private _ActivatedRoute:ActivatedRoute){
    this.Price= this._ActivatedRoute.snapshot.paramMap.get('price');
    this.carModelId= this._ActivatedRoute.snapshot.paramMap.get('modelId');
  }

  GetLessOffer(){
    this.loading=true
    this._CarsService.getLessOffer(this.carModelId).subscribe(data=>{
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
