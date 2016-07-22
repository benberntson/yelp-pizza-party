import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BusinessListComponent} from './business/business-list.component';
import {BusinessSearchComponent} from './business/business-search.component';



@Component({
  selector: 'app',
  template: `
  <div class="navigation">
    <ul class="nav nav-pills">
      <li><a [routerLink]="['']">Home</a></li>
      <li><a [routerLink]="['/search']">Search</a></li>    
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
    BusinessListComponent,
    BusinessSearchComponent,
    ...ROUTER_DIRECTIVES
    ]
})
export class AppComponent{ }