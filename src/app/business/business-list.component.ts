import {Component,OnInit,OnDestroy,EventEmitter} from '@angular/core';

import {BusinessComponent} from './business.component';
import {BusinessSearchComponent} from './business-search.component';
import {BusinessService} from './business.service';
import {FavoritesService} from '../favorites/favorites.service';
import {Business} from '../../schemas/Business';
import {FavoritesPanelComponent} from '../favorites/favorites-panel.component';
import {businessListMock} from '../../mocks/business-list-mock.ts';

@Component({
  selector:'business-list',
  template: `
  <business-search></business-search>
  <h3 *ngIf="businesses.length">Results</h3>
  <div *ngFor="let businessData of businesses">
    <business  [business-data]=businessData ></business>
    <button class="btn btn-primary favorites-add" (click)="addToFavorites(businessData)">
      Add to Favorites</button>
  </div>
  <div class="favorites-panel">
    <favorites-panel></favorites-panel>
  </div>
  `,
  styles:[`
    .input{
      display:inline-block;
    }
    .favorites-panel{
      position:fixed;
      right:100px;
      top:100px;
      height: 500px;
      width: 350px;
    }
    .favorites-add{
      position: relative;
      left: 200px;
      bottom: 17px;
    }
  `],
  directives:[BusinessSearchComponent,BusinessComponent,FavoritesPanelComponent]
})

export class BusinessListComponent implements OnInit,OnDestroy{
  businesses:Business[] = [];
  selectedBusinesses:Business[] = [];
  private _listchange:EventEmitter<Business[]>;

  constructor(
    private _businessService:BusinessService,
    private _favoritesService:FavoritesService
  ) {  }

  ngOnInit(){
    this.businesses = this._businessService.businesses;
    this._listchange = this._businessService.getListChangeEvent();
    this._listchange.subscribe(businesses => this.businesses = businesses);
  }
  ngOnDestroy(){
    //this._listchange.unsubscribe();
  }
  selectBusiness(selected:Business){
    let indexOfSelected = this.selectedBusinesses.indexOf(selected);
    if(indexOfSelected === -1){
      this.selectedBusinesses.push(selected);
    }
    else{
      this.selectedBusinesses.splice(indexOfSelected, 1);
    }
  }
  addToFavorites(business:Business){
    this._favoritesService.addBusiness(business);
  }
  removeFromFavorites(business:Business){
    this._favoritesService.removeBusiness(business);
  }
}

