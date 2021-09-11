import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  subscription!: Subscription;
  userLoggedIn!: boolean;
  errorMessage!: string;

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private _uiService: UiService
  ) { 
    this.subscription = this._uiService.onToggle().subscribe((value) => (this.userLoggedIn = value))

  }

  username: string = this._auth.getUsername();

  ngOnInit(): void {
    this.username;

  }
  
  openNav() {
    const sideBar = document.querySelector<HTMLElement>('#mySidebar');
    const main = document.querySelector<HTMLElement>('#main');
    if(sideBar){
      sideBar.style.width = "250px";
    }

    if(main){
      main.style.marginLeft= "250px";
    }
  }
  
  closeNav() {

    const sideBar = document.querySelector<HTMLElement>('#mySidebar');
    const main = document.querySelector<HTMLElement>('#main');

    if(sideBar){
      sideBar.style.width = "0";
    }

    if(main){
      main.style.marginLeft= "0";
    }
    
    
  }

  userLogIn(){
    this._uiService.userLogIn();
  }

  logOut(){
    this._api.postTypeRequest('user/logout', null).subscribe((res: any) => {
      if(res.status){
        this._auth.clearStorage();
        this._router.navigate([res.location])

      }
      
    }, err => {
        this.errorMessage = err['error'].message;
        });
  }

  

}
