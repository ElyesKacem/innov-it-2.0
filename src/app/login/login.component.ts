import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UtilisateurService} from '../Service/utilisateur.service';

import {NotificationServiceService} from '../Service/notification-service.service';
import {Utilisateur} from "../Model/utilisateur";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Utilisateur = new Utilisateur();
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  validateAllFormFields(formGroup: FormGroup)
  {Object.keys(formGroup.controls).forEach(field =>
  {const control = formGroup.get(field);
    if (control instanceof FormControl)
    {control.markAsTouched({ onlySelf: true }); }
    else if (control instanceof FormGroup)
    {this.validateAllFormFields(control); }});
  }


  constructor(
    private http: HttpClient,
    private userservice: UtilisateurService,
    private router: Router,
    private notificationService: NotificationServiceService) {

  }

  ngOnInit(): void {
  }

  goToLink(){
    this.router.navigate(['inscription'])
  }
// tslint:disable-next-line:typedef

  submitForm() {
    if (this.form.valid) {
      const em = this.form.value;
      let object: { username: string; password: string;};
      object = {
        // tslint:disable-next-line:max-line-length
        username:  em.username,
        password: em.password,

      };
      const json = JSON.stringify(object);
      this.userservice.login(json) .subscribe(data => {
        this.user = data;
        this.router.navigate(['']);
        localStorage.setItem("userName", this.user.username);
      }, error => this.notificationService.warn('User or Password is Invalid'));
    }
    else {
      this.validateAllFormFields(this.form);
    }
  }
  // tslint:disable-next-line:typedef
  get password(){
    return this.form.get('password');
  }
  // tslint:disable-next-line:typedef
  get username(){
    return this.form.get('username');
  }
}
