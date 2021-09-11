import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor() { }

  getUserDetails() {
      return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '{}') : null;
    }
    setDataInLocalStorage(variableName: string, data: any) {
      localStorage.setItem(variableName, data);
    }
    getToken() {
      
      return localStorage.getItem('token');
    }
    clearStorage() {
      localStorage.clear();
    }

    setUsername(username:string){
      localStorage.setItem("id", username);

    }

    getUsername(){

      
      const username: any = (localStorage.getItem("id"));
      console.log(username)
      return username
    }

    removeByteOrderMark(str: string ){
      return str.replace(/^\ufeff/g,"")
  }

  

    
}
