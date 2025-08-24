import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PreviewerService } from 'src/app/services/previewer.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
declare var $:any
@Component({
  selector: 'app-previewed-requests',
  templateUrl: './previewed-requests.component.html',
  styleUrls: ['./previewed-requests.component.scss']
})
export class PreviewedRequestsComponent {
  carModelId: any
  itemDetails: any
  selectedComfirmedFile: any = '';
  FileNoteStatus: any = ''
  AllRequests: any[] = []
  loading: boolean = false;
  isClicked: boolean = false;
  FormData = new FormData()
  InsuranceRequestId:any
  constructor( private _ActivatedRoute: ActivatedRoute
    , private _ToastrService: ToastrService, private _PreviewerService: PreviewerService) {
    this.carModelId = this._ActivatedRoute.snapshot.paramMap.get('modelId');
  }
  Form: FormGroup = new FormGroup({
    Notes: new FormControl('', [Validators.required]),
    UserId: new FormControl('', [Validators.required])
  })

  uploadAll(fileUploadQueue: any) {
    fileUploadQueue.uploadAll();
  }
  FilesArr: any[] = []
  uploadComfirmedFiles(event: any) {
    this.selectedComfirmedFile = event.target.files[0] ?? null;
    event.target.value = ''
  }
  viewFile() {
    var item = this.FilesArr.find(item => item.name == this.selectedComfirmedFile.name)
    if (item == undefined) {
      let model = {
        FileNote: this.selectedComfirmedFile,
        status: this.FileNoteStatus
      }
      this.FilesArr.push(model)
      console.log(this.FilesArr);
      this.selectedComfirmedFile = ''
      this.FileNoteStatus = ''
    } else {
      this._ToastrService.show('', "This File Already Exist")
    }
  }
  remove(i: any) {
    this.FilesArr.splice(i, 1)
  }
  GetAllPreviewsRequests() {
    this.loading = true
    this._PreviewerService.GetAllPreviewsRequests().subscribe((res: any) => {
      this.loading = false
      console.log("AllPreviewsRequests",res);
      this.AllRequests = res
    }, error => {
      this.loading = false
      console.log(error);
    })
  }
  AddPreviewerReport() {
    this.isClicked = true
    this.FormData.append('InsuranceRequestId',this.InsuranceRequestId)
    // Append Model
    for (const key of Object.keys(this.Form.value)) {
      const value = this.Form.value[key];
      this.FormData.append(key, value);
    }
    for(let i=0;i<this.FilesArr.length;i++){
      this.FormData.append('Media',this.FilesArr[i].FileNote)
    }
    // log
    // for (var pair of this.FormData.entries()){
    //   console.log(pair[0]+ ', ' + pair[1]); 
    // }
    this._PreviewerService.addPreviewerReport(this.FormData).subscribe((res: any) => {
      Swal.fire(res,'','success');
      this.Form.reset();
      this.FilesArr=[]
      this.isClicked = false
      $("#networkCoding").modal("toggle")
      console.log(res);
      this.GetAllPreviewsRequests();
      this.FormData = new FormData()
    }, error => {
      this.isClicked = false
      Swal.fire({icon: 'error',title:error.error,text:''})
      console.log(error);
      this.FormData = new FormData()
    })
  }

  ngOnInit(): void {
    this.GetAllPreviewsRequests();
  }
}
