import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InscriValidateurService {

  constructor( private http: HttpClient) { }
  passwordMatchValidator(password: string, confirmPassword: string) {
    // @ts-ignore
    return (formGroup: any) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }





  validateLoginNotTaken(control: AbstractControl) {

    return  this.checkLoginNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { LoginTaken: true };
      })
    );
  }

  checkLoginNotTaken(username: string): Observable<boolean> {


    return  this.http.get('http://52.168.143.249/users').pipe(
      map((res: any) => {
          return res.filter((user: { username: string; }) => user.username === username);
        }
      ),
      map(users => !users.length)
    );
  }

  validateEmailNotTaken(control: AbstractControl) {

    return  this.checkEmailNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { EmailTaken: true };
      })
    );
  }

  checkEmailNotTaken(email: string): Observable<boolean> {


    return  this.http.get('http://52.168.143.249/users').pipe(
      map((res: any) => {
          return res.filter((user: { email: string; }) => user.email === email);
        }
      ),
      map(users => !users.length)
    );
  }

}

