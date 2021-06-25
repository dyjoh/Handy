import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent implements OnInit {

  timer: any;

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
   
    



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
    this._api.getTypeRequestWithPayload("company", {search:  value}).subscribe((res) =>{
      console.log(res)
      this.outputUsers(res, results)
      

    })
  }

  

   outputUsers(results: any, container: any){
    container.value = ""

    results.forEach((result: any) => {
        var html= this.createUserHtml(result)
        container.append(html)
    })

    if(results.length == 0){
        container.append("<span class='noResults'> No results found</span>")
    }
}


createUserHtml(userData: any): string {

  var name = userData.firstName + " " + userData.lastName;

  

  return `<div class='user'>
              <div class='userImageContainer'>
                  <img src='${userData.profilePic}'>
              </div>
              <div class='userDetailsContainer'>
                  <div class='header'>
                      <a href='/profile/${userData.username}'>${name}</a>
                      <span class='username'>@${userData.username}</span>
                  </div>
              </div>
          </div>`;
}

}
