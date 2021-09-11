import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterOptionComponent } from './auth/components/register-option/register-option.component';
import { CompanyRegisterComponent } from './auth/components/company-register/company-register.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './auth/components/home/home.component';
import { CompanyHomeComponent } from './auth/components/company-home/company-home.component';
import { UserHomeComponent } from './auth/components/user-home/user-home.component';
import { CompanySearchComponent } from './auth/components/company-search/company-search.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'option/register', component: RegisterOptionComponent},
  {path: 'company/register', component: CompanyRegisterComponent},
  {path: '', component: HomeComponent},
  {path: 'company/home', component: CompanyHomeComponent},
  {path: 'user/home', component: UserHomeComponent},
  {path: 'user/search/result', component: UserHomeComponent},
  {path: 'user/search', component: CompanySearchComponent}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
