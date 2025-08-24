import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)

  }

}
