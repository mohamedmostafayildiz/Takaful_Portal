import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-customer-protection',
  templateUrl: './customer-protection.component.html',
  styleUrls: ['./customer-protection.component.scss']
})
export class CustomerProtectionComponent implements OnInit {
  ngOnInit(): void {
    $("html, body").animate({scrollTop:0} ,0)
  }

}
