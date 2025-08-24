import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare var $:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private _UserService:UserService){}

  ngOnInit(): void {
    $("html , body").animate({scrollTop:0} ,0)

  }

}
