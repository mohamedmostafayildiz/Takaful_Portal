import { Component } from '@angular/core';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.scss']
})
export class CompensationComponent {
  selectedFile:any
  FileExtextion:any
  ValidExtention:any
  uploadFile(event: any){
    // Get File Object
    this.selectedFile = event.target.files[0] ?? null;
    console.log(this.selectedFile);

    var myString = this.selectedFile.name
    this.FileExtextion=myString.substring(myString.lastIndexOf(".")+1)
    if(this.selectedFile.size==3000000 || this.FileExtextion.toLocaleLowerCase()=='xlsx'){
      this.ValidExtention = true
    }else{
      this.ValidExtention = false
    }
}
}
