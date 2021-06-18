import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Handy';
  userLoggedIn: boolean = false;
  subscription!: Subscription;

  constructor(
    private _uiService: UiService
  ){
    this.subscription = this._uiService.onToggle().subscribe((value) => (this.userLoggedIn = value))
  }

  

}
