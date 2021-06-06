import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule} from './auth/auth/auth.module'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterOptionComponent } from './auth/components/register-option/register-option.component';
import { CompanyRegisterComponent } from './auth/components/company-register/company-register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  declarations: [
    AppComponent,
    RegisterOptionComponent,
    CompanyRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MultiSelectAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
