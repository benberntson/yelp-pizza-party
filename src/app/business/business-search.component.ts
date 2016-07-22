import {Component} from '@angular/core';
import {BusinessService} from './business.service';
import {Business,toBusiness} from '../../schemas/Business';

@Component({
  selector: 'business-search',
  template:`
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
  `]
})
export class BusinessSearchComponent{
  searchTerm:string;

  constructor(private _businessService:BusinessService){}

  executeSearch(){
    this._businessService.getBusinesses(this.searchTerm).subscribe(
      data => {
        this._businessService.businesses = data.businesses.map(toBusiness);
        this._businessService.emitListChange();      
      },
      error => console.log(error)
    )
  }


}