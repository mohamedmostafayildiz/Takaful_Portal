import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalaccidentcompensation',
  templateUrl: './personalaccidentcompensation.component.html',
  styleUrls: ['./personalaccidentcompensation.component.scss']
})
export class PersonalaccidentcompensationComponent implements OnInit {
  selecteditem1:any='';
  selecteditem2:any='';
  selecteditem3:any='';
  selecteditem4:any='';
  selecteditem5:any='';
  selecteditem6:any='';
  selecteditem7:any='';
  constructor(){}
  uploaditem4(event:any){
    this.selecteditem4=event.target.files[0] ?? null;
    console.log(this.selecteditem4);
  }
  uploadeitem1(event:any){
    this.selecteditem1=event.target.files[0] ?? null;
    console.log(this.selecteditem1);
  }
  uploadeitem2(e:any){
    this.selecteditem2=e.target.files[0] ?? null;
    console.log(this.selecteditem2);
  }
  uploadeitem3(e:any){
    this.selecteditem3=e.target.files[0] ?? null;
    console.log(this.selecteditem3);
  }
  uploadeitem5(e:any){
    this.selecteditem5=e.target.files[0] ?? null;
    console.log(this.selecteditem5);
  }
  uploadeitem6(event:any){
    this.selecteditem6=event.target.files[0] ?? null;
    console.log(this.selecteditem6); 
  }
  uploadeitem7(e:any){
    this.selecteditem7=e.target.files[0]??null;
    console.log(this.selecteditem7);
    
  }
  ngOnInit(): void {
    
  }

}
