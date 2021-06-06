import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register-option',
  templateUrl: './register-option.component.html',
  styleUrls: ['./register-option.component.css']
})
export class RegisterOptionComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick(name:string){
    console.log(name)
    if(name === "user") this._router.navigate(['register']);

    else this._router.navigate(['company/register']);


  }

}
