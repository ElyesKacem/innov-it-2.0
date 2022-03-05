import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-addpublication',
  templateUrl: './addpublication.component.html',
  styleUrls: ['./addpublication.component.css']
})
export class AddpublicationComponent implements OnInit {

  constructor(      public dialogRef: MatDialogRef<AddpublicationComponent>) { }

  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close();
/*    this.formGroup.reset();
    */
  }

  handleUpload(event:any) {
    console.log(event.currentTarget)
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
    };
  }
}
