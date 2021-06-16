import { Component, ElementRef, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ApiService} from '../../../services/api.service'
import { AuthService} from '../../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = false;
  errorMessage!: string;
  showUser: boolean = false;
  showCompany: boolean = true;
  placeHolder: string = "Username or Email"
  userTitle: string = "User"
  companyTitle: string = "Company"
  title: string = "user"
  text: string = "User Login"
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private _elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.isUserLogin();
    this._elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'linear-gradient(to left, #1e824c , #cfffc1)';

  }
  companyLogin(){
    this.showUser = true;
    this.showCompany = false;
    this.placeHolder = "Company Name or Email";
    this.title = "company";
    this.text = "Company Login"

  }

  userLogin(){
    this.showCompany = true;
    this.showUser = false;
    this.placeHolder = "Username or Email";
    this.title = "user"
    this.text = "User Login"
  }

  onSubmit(form: NgForm){
    
    if(!this.showUser){
      this._api.postTypeRequest('login', form.value).subscribe((res: any) => {
        if(res.status){
          console.log(form.value.logUsername);

          this._auth.setUsername(form.value.logUsername);
  
          this._auth.setDataInLocalStorage("userData", JSON.stringify(res.data));
  
          this._auth.setDataInLocalStorage('token', res.token);
  
          this._router.navigate(['user/home'])
  
  
  
        }
        else {
        }
        }, err => {
        this.errorMessage = err['error'].message;
        });
    }
    if(!this.showCompany){this._api.postTypeRequest('login', form.value).subscribe((res: any) => {
      if(res.status){

        this._auth.setDataInLocalStorage("userData", JSON.stringify(res.data));

        this._auth.setDataInLocalStorage('token', res.token);

        this._auth.setUsername(form.value.logUsername);

        this._router.navigate(['company/home']);



      }
      else {
      }
      }, err => {
      this.errorMessage = err['error'].message;
      });}
    

  

    
  }

  isUserLogin(){
      if(this._auth.getUserDetails() != null){
        this.isLogin = true;
      }
    }
    logout(){
      this._auth.clearStorage()
      this._router.navigate(['']);
    }

}
