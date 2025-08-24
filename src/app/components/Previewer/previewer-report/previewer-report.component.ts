import { Component } from '@angular/core';
import { PreviewerService } from 'src/app/services/previewer.service';

@Component({
  selector: 'app-previewer-report',
  templateUrl: './previewer-report.component.html',
  styleUrls: ['./previewer-report.component.scss']
})
export class PreviewerReportComponent {

  selectedReport:any
  selectedImages:any
  selectedVideo:any
  NotesVal:any
  userId:any
  constructor(private _PreviewerService:PreviewerService){}


  uploadReport(e:any){
    this.selectedReport=e.target.files[0] ?? null
    console.log(this.selectedReport);
    
  }
  uploadImages(e:any){
    this.selectedImages=e.target.files[0] ?? null
    console.log(this.selectedImages);
  }
  uploadVideo(e:any){
    this.selectedVideo=e.target.files[0] ?? null
    console.log(this.selectedVideo);
  }
      // Add previewer Report
  addPreviewerReport(){
    var formData = new FormData()
    formData.append('Report',this.selectedReport)
    formData.append('Video',this.selectedVideo)
    formData.append('Images',this.selectedImages)
    formData.append('Notes',this.NotesVal)
    formData.append('UserId',this.userId)
    this._PreviewerService.addpreViewerReport(formData).subscribe(res=>{
      console.log(res);
    },error=>{
      console.log(error);
    })
  }


  ngOnInit(): void {
    this.userId=JSON.parse(localStorage.getItem('AlcanResponse')!).userId
  }
}
