import { Component, ElementRef, InjectionToken, OnInit } from '@angular/core';

import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-option',
  templateUrl: './register-option.component.html',
  styleUrls: ['./register-option.component.css']
})
export class RegisterOptionComponent implements OnInit {
  showUser: boolean = false;
  showCompany: boolean = true;
  quote: string = "Fixing up the Home Made Convenient";

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private _elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this._elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'linear-gradient(to left, #1e824c , #cfffc1)';

  }

  companyRegister(){
    this.showUser = true;
    this.showCompany = false;
    this.quote = "Expanding the Company Clientelle";
  }

  userRegister(){
    this.showCompany = true;
    this.showUser = false;
    this.quote = "Fixing up the Home Made Convenient";

  }


}
