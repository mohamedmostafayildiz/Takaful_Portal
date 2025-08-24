import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)

  }

}
