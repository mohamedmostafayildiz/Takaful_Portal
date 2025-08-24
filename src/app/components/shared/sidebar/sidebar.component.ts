import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  customersTypes:any
  constructor( public _Router:Router, public _AuthService:AuthService){
    console.log(this.roles); 
}
  roles:any= JSON.parse(localStorage.getItem("userType")!)?.roles

  getCustomerTypes(){

  }

  redirectTo(uri: string) {
    this._Router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this._Router.navigate([uri]));
 }
 Customers(id:any){
  if(id == null){
    this.redirectTo("AllCustomers/")
  }
  this.redirectTo("AllCustomers/"+id)
 }

  ngOnInit(): void {
    this.getCustomerTypes();
  }
}
