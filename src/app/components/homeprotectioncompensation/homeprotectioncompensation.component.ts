import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeprotectioncompensation',
  templateUrl: './homeprotectioncompensation.component.html',
  styleUrls: ['./homeprotectioncompensation.component.scss']
})
export class HomeprotectioncompensationComponent implements OnInit{
  selecteditem:any=''
  selecteditem2:any=''
  selecteditem3:any=''
 constructor(){}
 uploadeitem1(event:any){
    this.selecteditem=event.target.files[0] ?? null;
    console.log(this.selecteditem);
  }
  uploadeitem2(event:any){
    this.selecteditem2=event.target.files[0] ?? null;
    console.log(this.selecteditem2);
  }
  uploadeitem3(event:any){
    this.selecteditem3=event.target.files[0] ?? null;
    console.log(this.selecteditem3);
    
  }
 ngOnInit(): void {
   
 }
}
