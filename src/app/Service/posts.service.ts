import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Publication} from "../Model/publication";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  urlPath: string;
  constructor(private http: HttpClient) {
    this.urlPath = 'http://hackaton.eastus.cloudapp.azure.com';
  }

  getAllPost() {
    return this.http.get(this.urlPath+'/posts')
  }

  getPostbyUsername(username: string | null | undefined){
    return this.http.get(this.urlPath+'/postsuser/'+username)
  }

  CreatePost(p:Publication)
  {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.urlPath,p,{ headers:headers});
  }
}
