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
  }

  userLogin(){
    this.showCompany = true;
    this.showUser = false;
    this.placeHolder = "Username or Email";
    this.title = "user"
  }

  onSubmit(form: NgForm){
    
    console.log("form data: ", form.value);
    if(this.showUser){
      this._api.postTypeRequest('login', form.value).subscribe((res: any) => {
        if(res.status){
          console.log(res);
  
          this._auth.setDataInLocalStorage("userData", JSON.stringify(res.data));
  
          this._auth.setDataInLocalStorage('token', res.token);
  
          this._router.navigate([''])
  
  
  
        }
        else {
        }
        }, err => {
        this.errorMessage = err['error'].message;
        });
    }
    if(this.showCompany){this._api.postTypeRequest('login', form.value).subscribe((res: any) => {
      if(res.status){
        console.log(res);

        this._auth.setDataInLocalStorage("userData", JSON.stringify(res.data));

        this._auth.setDataInLocalStorage('token', res.token);

        this._router.navigate([''])



      }
      else {
      }
      }, err => {
      this.errorMessage = err['error'].message;
      });}
    

  

    
  }

  isUserLogin(){
      console.log(this._auth.getUserDetails())
      if(this._auth.getUserDetails() != null){
        this.isLogin = true;
      }
    }
    logout(){
      this._auth.clearStorage()
      this._router.navigate(['']);
    }

}
