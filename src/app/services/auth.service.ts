import { Injectable } from '@angular/core';

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
    
}
