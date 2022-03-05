import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Publication} from "../Model/publication";

@Component({
  selector: 'app-addpublication',
  templateUrl: './addpublication.component.html',
  styleUrls: ['./addpublication.component.css']
})
export class AddpublicationComponent implements OnInit {
  publication: Publication = new Publication();
  constructor(      public dialogRef: MatDialogRef<AddpublicationComponent>,
                    private fb: FormBuilder) { }
  form = this.fb.group({
    titre: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image1: new FormControl('', Validators.required),
    image2: new FormControl('', Validators.required),
  });
  get titre() {
    return this.form.get('titre');
  }
  get description() {
    return this.form.get('description');
  }
  get image1() {
    return this.form.get('image1');
  }
  get image2() {
    return this.form.get('image2');
  }

  addPub()
  {
  this.publication.titre=this.titre?.value;
  this.publication.description=this.description?.value;

  }
  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close();
/*    this.formGroup.reset();
    */
  }

  handleUpload1(event1:any) {

    const file = event1.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image1?.setValue(reader.result);
    };
  }
  handleUpload2(event2:any) {

    const file = event2.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {

      this.image2?.setValue(reader.result);
    };
  }
}
