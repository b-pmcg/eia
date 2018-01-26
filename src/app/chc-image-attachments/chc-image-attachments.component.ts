import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chc-image-attachments',
  templateUrl: './chc-image-attachments.component.html',
  styleUrls: ['./chc-image-attachments.component.scss']
})
export class ChcImageAttachmentsComponent implements OnInit {
  public imageUploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.imageUploadForm = this.formBuilder.group({
      attachmentFile: ['', Validators.required],
      narrative: ['', Validators.required]
    });
  }

  onSubmit(){
    
  }

}
