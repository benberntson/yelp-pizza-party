import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BusinessListComponent} from './business/business-list.component';
import {BusinessSearchComponent} from './business/business-search.component';
import {SlimLoadingBar, SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {LoginService} from './user/login.service.ts';

@Component({
  selector: 'app',
  template: `
  <div class="navigation">
    <ul class="nav nav-pills">
      <li><a [routerLink]="['/']">Home</a></li>
      <li *ngIf="isLoggedIn()"><a [routerLink]="['/search']">Search</a></li> 
      <li *ngIf="isLoggedIn()"><a [routerLink]="['/favorites']">Favorites</a></li>  
      <li *ngIf="!isLoggedIn()"><a [routerLink]="['/signup']">Signup</a></li>    
      <li *ngIf="!isLoggedIn()"><a [routerLink]="['/signin']">Signin</a></li> 
      <li *ngIf="isLoggedIn()"><a (click)="logOut()">Log Out</a></li>   
    </ul>
  </div>
  <router-outlet></router-outlet>
  `,
  styles: [`
    .navigation{
      background: rgba(9,9,9,0.75);
      color: white;
      border-radius: 0px;
      border-color: rgba(0,0,0,0.5);
      border-bottom: 1px;
      font-size: 100%;
    }
    .nav{
      display:inline-block;
      position:relative;
      left:45%;
    }
    .nav-pills > li > a {
      border-radius: 0px;
    }
  `],
  directives: [
    SlimLoadingBar,
    BusinessListComponent,
    BusinessSearchComponent,
    ...ROUTER_DIRECTIVES
  ]
})
export class AppComponent {
  constructor(
    private _slimLoadingBarService: SlimLoadingBarService,
    private _loginService: LoginService
  ) { }
  isLoggedIn() {
    return this._loginService.isLoggedIn();
  }
  logOut() {
    localStorage.clear();
  }
}