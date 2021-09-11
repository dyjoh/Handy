import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private userLoggedIn: boolean = false;
  private subject = new Subject<any>()


  constructor() { }

  userLogIn(): void {
    this.userLoggedIn = !this.userLoggedIn
    console.log(this.userLoggedIn)
    this.subject.next(this.userLoggedIn)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
