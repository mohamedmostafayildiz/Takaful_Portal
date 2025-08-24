import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
declare var $:any
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  

})
export class AppComponent implements OnInit{
  title = 'Alcan';
  opened=false;
  allTreaties:any;
  loader:boolean=true;
  constructor(public _AuthService:AuthService,){
    AOS.init();
  }
  handleSideBar(){
    document.getElementById("Dash_menu")?.classList.toggle("is-active");
    this.opened=!this.opened
  }

  ngOnInit(): void {
    AOS.init();
    
     //Loader variable set false after page load
  //    setTimeout(()=>{                           
  //     this.loader = false;
  // }, 1000);
  // $('#date').datepicker({ dateFormat: 'dd-mm-yy' }).val();
  
  }

}
