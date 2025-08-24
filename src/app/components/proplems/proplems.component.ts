import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-proplems',
  templateUrl: './proplems.component.html',
  styleUrls: ['./proplems.component.scss']
})
export class ProplemsComponent implements OnInit {
  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)
  }

}
