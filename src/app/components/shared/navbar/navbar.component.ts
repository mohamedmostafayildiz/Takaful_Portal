import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Output() SideStatus=new EventEmitter()
  constructor(private _Router:Router, public _AuthService:AuthService, private _TranslateService:TranslateService){
    _TranslateService.addLangs(['en', 'ar'])
    _TranslateService.setDefaultLang('en')
  }
  roles:any= JSON.parse(localStorage.getItem("AlcanResponse")!)?.roles
  handleSideBar(){
    this.SideStatus.emit()
  }
  async logOut(){
    
    await localStorage.removeItem('UserAlcanToken')
    await localStorage.removeItem('userId')
    await localStorage.removeItem('AlcanResponse')
    await this._Router.navigate(['/login']);
    window.location.reload()
  }
  
  handleMenu(){
    document.getElementById("menu")?.classList.toggle("is-active");
    document.getElementById("actions")?.classList.toggle("is-active");
  }
  
  getLanguage(e:any){
    this._TranslateService.use(e)
  }


  ngOnInit(){
    const navLinkEls = document.querySelectorAll('.nav_link');
        navLinkEls.forEach(item=>{
        item.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active')
        item.classList.add('active');
      })
    })
    
  }
}
