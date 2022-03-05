import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Publication} from "../Model/publication";
import {PostsService} from "../Service/posts.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  publications?:Publication[];

  username?:string | null;
  constructor(private service: PostsService) { }
  ngOnInit(): void {
    this.reloadData();
    this.username=localStorage.getItem("userName");

  }
  reloadData(): any{


    this.service.getPostbyUsername(this.username).subscribe(data  =>
      this.publications = data as Publication[]);
  }

}
