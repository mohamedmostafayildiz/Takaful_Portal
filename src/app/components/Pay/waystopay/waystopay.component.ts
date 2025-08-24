import { Component } from '@angular/core';

@Component({
  selector: 'app-waystopay',
  templateUrl: './waystopay.component.html',
  styleUrls: ['./waystopay.component.scss']
})
export class WaystopayComponent {
  PaymentWay:any=''
  getPaymentWay(type:any){
    console.log(type);
    this.PaymentWay = type
  }
}
