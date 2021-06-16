import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule} from './auth/auth/auth.module'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule, MAT_TAB_GROUP } from '@angular/material/tabs';
 





@NgModule({
  declarations: [
    AppComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    
    RouterModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MultiSelectAllModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule
  ],
  providers: [
    {
      provide: MAT_TAB_GROUP,
      useValue: undefined,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
