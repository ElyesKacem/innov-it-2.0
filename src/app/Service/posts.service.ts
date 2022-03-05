import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
}
