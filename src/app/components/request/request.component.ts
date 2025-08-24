import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)
  }

}
