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



@NgModule({
  declarations: [
  LoginComponent,
  RegisterComponent,
  RegisterOptionComponent,
  CompanyRegisterComponent
  
  ],
  imports: [
  CommonModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  MultiSelectAllModule
  ],
  exports : [
  LoginComponent,
  RegisterComponent
  ]
  })
  export class AuthModule { }