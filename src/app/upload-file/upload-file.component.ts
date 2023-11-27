import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  constructor(private base: BaseService) { }
  selectedFile: any
  percentage: any

  selectFile(event: any) {
    this.selectedFile = event.target.files[0]
    this.percentage=0
  }
  uploadFile() {
    this.base.uploadFile(this.selectedFile).subscribe(
      (p) => this.percentage = Math.floor(Number (p)))
  }
}

