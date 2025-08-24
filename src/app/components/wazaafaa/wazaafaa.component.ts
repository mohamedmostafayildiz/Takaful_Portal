import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-wazaafaa',
  templateUrl: './wazaafaa.component.html',
  styleUrls: ['./wazaafaa.component.scss']
})
export class WazaafaaComponent implements OnInit {
  constructor(){}
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 600,
  //   navText: ['&#8249', '&#8250;'],
  //   responsive: {
  //     0: {
  //       items: 3
  //     },
  //     400: {
  //       items: 3
  //     },
     
  //   },
  //   nav: true
  // }
  
   
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)
  }

}
