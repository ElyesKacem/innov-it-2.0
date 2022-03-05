import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddpublicationComponent} from "../addpublication/addpublication.component";
import {PostsService} from "../Service/posts.service";
import {Publication} from "../Model/publication";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private postService: PostsService) { }
  allpublication?:Publication[];
  ngOnInit(): void {
    this.postService.getAllPost().subscribe(data  =>
      this.allpublication = data as Publication[]);
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = '100%';
    dialogConfig.minWidth = '40%';
    dialogConfig.panelClass = 'marg';
    this.dialog.open(AddpublicationComponent, dialogConfig).afterClosed().subscribe(
      result => {
        console.log("closed")
      }
    );
  }
}
