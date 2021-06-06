import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';



@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyRegisterComponent implements OnInit {

  isLogin: boolean = false;
  errorMessage!: string;

  //Company Types
  public companyTypes: Object[] = [
    { Id: 'companyType1', Type: 'Cementing' },
    { Id: 'companyType2', Type: 'Yard Care' },
    { Id: 'companyType3', Type: 'Power Washing' },
    { Id: 'companyType4', Type: 'Window' },
    { Id: 'companyType5', Type: 'Home Improvement' }
];

// maps the appropriate column to fields property
public fields: Object = { text: 'Type', value: 'Id' };



  // set the placeholder to MultiSelect Dropdown input element
 
  public localWaterMark: string = 'Select Company Type(s)';  
// set the type of mode for how to visualized the selected items in input element.
public default : string = 'Default';


  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.isUserLogin();
  }

  onSubmit(form: NgForm) {
      console.log('Your form data : ', form.value);

      this._api.postTypeRequest('company/register', form.value).subscribe((res: any) => {
      if (res.status) {
        console.log(res)
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['login']);
      } else {
        console.log(res)
        alert(res.msg)
      }
      }, err => {
      this.errorMessage = err['error'].message;
      });
    }
    
    isUserLogin(){
      if(this._auth.getUserDetails() != null){
        this.isLogin = true;
      }
    }

}
