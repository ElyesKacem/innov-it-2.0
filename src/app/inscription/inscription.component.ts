import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {InscriValidateurService} from '../Service/inscri-validateur.service'
import {UtilisateurService} from '../Service/utilisateur.service'
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  formGroup = this.fb.group({
      // tslint:disable-next-line:max-line-length
    username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
        [this.InscriValidation.validateLoginNotTaken.bind(this.InscriValidation)]],
      password: ['', [Validators.required , Validators.minLength(8), Validators.maxLength(30)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      email: ['', [Validators.email, Validators.required],
        [this.InscriValidation.validateEmailNotTaken.bind(this.InscriValidation)]],
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      Tel: ['', [Validators.required, Validators.pattern('[0-9 ]{8}')]],
      DateNaissance: ['156'],
      imageprofil:['aa'],
        sexe:['homme',Validators.required],
   //   role: ['u'],
      check: ['', Validators.required],



    }, { validator: this.InscriValidation.passwordMatchValidator('password', 'confirmPassword')}
  ) ;
  constructor(private InscriptionService: UtilisateurService,private fb: FormBuilder,private router:Router, private snackBar: MatSnackBar, private InscriValidation: InscriValidateurService) { }

  ngOnInit(): void {
  }
  goToLink(){
    this.router.navigate(['login'])
  }

  onClear(){
    this.formGroup.reset();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      let object: { username: string; password: string; telephone: string;
        prenom: string;  nom: string; email: string;dateNaissance :string ; imageprofil:string;sexe:string; };
      object = {
        // tslint:disable-next-line:max-line-length
        username:  this.formGroup.get('username')?.value,
        password: this.formGroup.get('password')?.value,
        email: this.formGroup.get('email')?.value,
        nom: this.formGroup.get('Nom')?.value,
        prenom: this.formGroup.get('Prenom')?.value,
        telephone : this.formGroup.get('Tel')?.value,
        dateNaissance : this.formGroup.get('DateNaissance')?.value,
        sexe :this.formGroup.get('sexe')?.value,
        imageprofil: this.formGroup.get('imageprofil')?.value,
      // role: this.formGroup.get('role')?.value
      };
      const json = JSON.stringify(object);
      this.InscriptionService.register(json).subscribe
      (
        (data) => {
          this.goToLink();
        },
        (error: any) => console.log(error)
      );
      console.log(json);
      this.onClear();
    } else {
      this.validateAllFormFields(this.formGroup);
    }
  }
  // tslint:disable-next-line:typedef
  get Username() {
    return this.formGroup.get('username');
  }
// tslint:disable-next-line:typedef
  get password(){
    return this.formGroup.get('password');
  }

// tslint:disable-next-line:typedef
  get confirmPassword(){
    return this.formGroup.get('confirmPassword');
  }
// tslint:disable-next-line:typedef
  get email(){
    return this.formGroup.get('email');
  }

  // tslint:disable-next-line:typedef
  get Nom(){
    return this.formGroup.get('Nom');
  }
// tslint:disable-next-line:typedef
  get Prenom(){
    return this.formGroup.get('Prenom');
  }
// tslint:disable-next-line:typedef
  get Tel() {
    return this.formGroup.get('Tel');
  }
// tslint:disable-next-line:typedef
  get DateNaissance(){
    return this.formGroup.get('DateNaissance');
  }
// tslint:disable-next-line:typedef
  get check() {
    return this.formGroup.get('check');
  }
  // tslint:disable-next-line:typedef
  get sexe() {
    // @ts-ignore
    return this.formGroup.get('sexe');
  }
  // tslint:disable-next-line:typedef
   setsexe(sexe:string) {

    return this.formGroup.get('sexe')?.setValue(sexe);
  }
  validateAllFormFields(formGroup: FormGroup)
  {Object.keys(formGroup.controls).forEach(field =>
  {const control = formGroup.get(field);
    if (control instanceof FormControl)
    {control.markAsTouched({ onlySelf: true }); }
    else if (control instanceof FormGroup)
    {this.validateAllFormFields(control); }});
  }
}
