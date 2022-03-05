import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Publication} from "../Model/publication";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  urlPath: string;
  constructor(private http: HttpClient) {
    this.urlPath = 'http://hackaton.eastus.cloudapp.azure.com/posts';
  }

  getAllPost() {
    return this.http.get(this.urlPath)
  }

  CreatePost(p:Publication)
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.urlPath,p,{ headers:headers});
  }
}
