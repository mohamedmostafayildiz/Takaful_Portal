import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-accidents',
  templateUrl: './all-accidents.component.html',
  styleUrls: ['./all-accidents.component.scss']
})
export class AllAccidentsComponent implements OnInit{
  AllAccidents:any
  loading:boolean =  false
  constructor(private _AdminService:AdminService){}



  getAllAccidents(){
    this.loading = true
    this._AdminService.getAllAccidents().subscribe(data=>{
      this.loading = false
      console.log(data);
      this.AllAccidents = data;
    },error=>{
      this.loading = false
      console.log(error);
    })
  }


  ngOnInit(){
    this.getAllAccidents()
  }

}
