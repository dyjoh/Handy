import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component'
import { CompanyRegisterComponent } from '../components/company-register/company-register.component';
import { RegisterOptionComponent } from '../components/register-option/register-option.component';
import { BrowserModule } from '@angular/platform-browser';

import { RegisterComponent } from '../components/register/register.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MatOptionModule, } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { UserHomeComponent } from '../components/user-home/user-home.component';
import { CompanyHomeComponent } from '../components/company-home/company-home.component';




@NgModule({
  declarations: [
  LoginComponent,
  RegisterComponent,
  RegisterOptionComponent,
  CompanyRegisterComponent,
  HomeComponent,
  UserHomeComponent,
  CompanyHomeComponent
  
  ],
  imports: [
  CommonModule,
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  MultiSelectAllModule,
  MatOptionModule,
  MatSelectModule
  ],
  exports : [
  LoginComponent,
  RegisterComponent
  ]
  })
  export class AuthModule { }