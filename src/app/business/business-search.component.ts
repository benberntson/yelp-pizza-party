import {Component} from '@angular/core';
import {SlimLoadingBar,SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

import {BusinessService} from './business.service';
import {Business,toBusiness} from '../../schemas/Business';

@Component({
  selector: 'business-search',
  template:`
  <ng2-slim-loading-bar></ng2-slim-loading-bar>
  <nav class="navbar navbar-inverted">
    <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input [(ngModel)]="searchTerm" type="text" class="form-control" placeholder="enter your location here">
        </div>
        <button (click)="executeSearch()" class="btn btn-default">Search</button>
    </form>
  </nav>  
  `,
  styles:[`
  input{
    border-radius:0px;
  }
  form{
    left: 45%;
  }
  `],
  directives:[SlimLoadingBar]
})
export class BusinessSearchComponent{
  searchTerm:string;

  constructor(
    private _businessService:BusinessService,
    private _slimLoadingBarService:SlimLoadingBarService
  )
  {}

  executeSearch(){
    this._slimLoadingBarService.start();
    this._businessService.getBusinesses(this.searchTerm).subscribe(
      data => {
        this._businessService.businesses = data.businesses.map(toBusiness);
        this._businessService.emitListChange();
        this._slimLoadingBarService.complete();   
      },
      error => console.log(error)
    )
  }


}