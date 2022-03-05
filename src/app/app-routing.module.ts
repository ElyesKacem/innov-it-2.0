import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [

  {path: '', component:TemplateComponent },
      {path: 'inscription', component: InscriptionComponent},
      {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
