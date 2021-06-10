import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterOptionComponent } from './auth/components/register-option/register-option.component';
import { CompanyRegisterComponent } from './auth/components/company-register/company-register.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './auth/components/home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'option/register', component: RegisterOptionComponent},
  {path: 'company/register', component: CompanyRegisterComponent},
  {path: '', component: HomeComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
