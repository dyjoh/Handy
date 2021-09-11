import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private _uiService: UiService
  ) { }

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

}
