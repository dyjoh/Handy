import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class CompanySearchComponent implements OnInit {

  timer: any;
  html: string = "";
  companys: any[] = []
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private _elementRef: ElementRef
    ) { }

  ngOnInit(): void {
    this._elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'linear-gradient(to left, #1e824c , #cfffc1)';

    



  }

  ngAfterViewInit(){
    console.log(this._elementRef.nativeElement.querySelector("#user"))
  }

  onKeyDown($event: any){
    clearTimeout(this.timer);
    var textbox = $event.target
    var value = textbox.value

    this.timer = setTimeout(() => {
        value = textbox.value.trim() 
        if(value == ""){

        }
        else{
            this.search(value)
        }
    }, 500)
  }
  

  search(value: any) {
    console.log(value)
    const results = document.querySelector<HTMLElement>('.resultsContainer');
    this._api.getTypeRequestWithPayload("company", {"search":  value}).subscribe((res) =>{
      
      this.companys = res
      console.log("companys: ",this.companys)
      // this.outputUsers(res, results)
      

    })
  }

  

//    outputUsers(results: any, container: any){
//     this.html = ""

//     results.forEach((result: any) => {
//       var html= this.createUserHtml(result)
//       this.html += html
//     })

//     if(results.length == 0){
//         this.html = "<span class='noResults'> No results found</span>"
//     }
// }


onClick(id: any){
  console.log("hit")
  this._api.getTypeRequest("company/" + id).subscribe((res) =>{
    this._router.navigate(['user/search/result', id])    

  })

}



createUserHtml(userData: any): string {


  

  return `<div id="user" class='user' (click)="onClick(${userData._id})">
              <div class='userImageContainer'>
                  <img src='../../../../assets/images/pic12.png'>
              </div>
              <div class='userDetailsContainer'>
                  <div class='header'>
                      <h2>${userData.companyName}</h2>
                      <p class="address">
                        ${userData.companyAddress}
                      </p>
                      
                  </div>
              </div>
          </div>`;
}

}

