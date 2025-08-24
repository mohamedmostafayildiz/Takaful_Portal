import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elostaaa',
  templateUrl: './elostaaa.component.html',
  styleUrls: ['./elostaaa.component.scss']
})
export class ElostaaaComponent implements OnInit {
  selectedfile:any=''
constructor(){}
uploadeitem1(event:any){
this.selectedfile=event.target.files[0] ?? null;
console.log(this.selectedfile);

}
ngOnInit(): void {
  
}
}
