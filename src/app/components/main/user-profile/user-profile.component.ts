import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  loading:boolean=false
  userId:any
  accidentDetails:any
  userPolices:any
  policyId:any
  selectedAcciedentIamges:any
  isClicked:boolean = false

  constructor(private _UserService:UserService){}


  uploadImages(e:any){
    this.selectedAcciedentIamges = e.target.files[0] ?? null
    console.log(this.selectedAcciedentIamges);
    
  }
  getAllUserPolices(){
    this._UserService.getAllUserPolices(this.userId).subscribe(data=>{
      console.log(data);
      this.userPolices = data
    },error=>{
      console.log(error);
    })  
  }
  getPolicyId(policyId:any){
    this.policyId = policyId
    console.log(this.policyId);
    
  }

  saveAccident(){
    this.isClicked = true
    let formData = new FormData()
    formData.append('AccidentLocation','locationofaccident')    // Change to be Not Static
    formData.append('Details',this.accidentDetails)
    formData.append('UserId',this.userId)
    formData.append('PolicyId',this.policyId)
    formData.append('Images',this.selectedAcciedentIamges)      // Remember to be More than Image
    this._UserService.AddAccident(formData).subscribe(res=>{
      this.isClicked = false
      $("#AccidentMoal").modal('toggle')
      Swal.fire({
        icon: 'success',
        title: 'Accident Details Added Successfully',
        showConfirmButton: false,
        timer:2500
      })
    },error=>{
      this.isClicked = false
      console.log(error);
      
      Swal.fire({
        icon: 'error',
        title: error.error,
        text: '',
      })
      
    })
  }
  ngOnInit(){
  this.userId=JSON.parse(localStorage.getItem('AlcanResponse')!).userId
    console.log(this.userId);
    this.getAllUserPolices()
  }
}
