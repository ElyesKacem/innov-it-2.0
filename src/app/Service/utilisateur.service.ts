import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  urlPath: string;
  constructor(private http: HttpClient) {
    this.urlPath = 'http://hackaton.eastus.cloudapp.azure.com';
  }
  register(user: string): Observable<any>
  {let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(this.urlPath +'/signup',user,{ headers:headers});
  }
}
