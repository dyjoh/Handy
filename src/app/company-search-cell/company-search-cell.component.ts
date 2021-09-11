import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-company-search-cell',
  templateUrl: './company-search-cell.component.html',
  styleUrls: ['./company-search-cell.component.css']
})
export class CompanySearchCellComponent implements OnInit {
  @Input()
  company: any;
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private _elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  onClick(id: any){
    console.log("hit")
    this._api.getTypeRequest("company/" + id).subscribe((res) =>{
      this._router.navigate(['user/search/result', id])    
  
    })
  
  }

}
