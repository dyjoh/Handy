import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  username: string = this._auth.getUsername();

  ngOnInit(): void {
    this.username
  }
  

}
