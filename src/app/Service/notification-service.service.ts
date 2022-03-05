import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(public snackBar: MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 500000000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
      panelClass: ['aaaaaa']


  };



  warn(msg: string) {

    this.snackBar.open(msg, '', this.config);
  }
}
