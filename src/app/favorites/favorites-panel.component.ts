import {Component, OnInit, OnDestroy, EventEmitter, Input} from '@angular/core';

import {MiniBusinessComponent} from '../business/mini-business.component'
import {FavoritesService} from './favorites.service';
import {Business} from '../../schemas/Business';
import {businessListMock} from '../../mocks/business-list-mock';

@Component({
  selector: 'favorites-panel',
  template: `
  <div *ngIf="businesses.length">
    <h3>Favorites</h3>
    <h4>{{favoritesName}}</h4>
     <div class="favorites">
        <div *ngFor="let business of businesses" class='mini-business'>
          <button class="remove-button" (click)="removeBusiness(business)">x</button>
            <mini-business [business-data]="business"></mini-business>
        </div>
        <input type="text" [(ngModel)]="favoritesName" value="name your favorites">
      </div>
    <button (click)="saveFavorites()" class="btn btn-primary">Save Favorites</button>
  </div>
  `,
  styles: [`
    .remove-button{
      display:inline-block;
      position:relative;
      bottom:-30px;
      left:-24px;
      width:25px;
      height:25px;
      background-color: darkred;
      border: 1px solid black;
      transition: background-color 0.3s;
    }
    .remove-button:hover{
      background-color:red;
      color:black;
    }
    mini-business{
      display:inline-block;
    }
    .mini-business{
      width: 300px;
    }
    .favorites{
      
    }
  `],
  directives: [MiniBusinessComponent]
})

/**
 * FavoritesComponent
 * 
 * Displays a list of favorite pizza businesses.
 * If the 'read-only' input is set to true, 
 * the component only displays a list of pizza businesses.
 * 
 */
export class FavoritesPanelComponent implements OnInit, OnDestroy {
  @Input('read-only') readOnlyMode: boolean = false;
  private _listChange: EventEmitter<Business[]>;
  favoritesName: string = '';
  businesses: Business[] = [];

  constructor(private _favoritesService: FavoritesService) { }

  ngOnInit() {
    this.businesses = this._favoritesService.favorites;
    this._listChange = this._favoritesService.getListChangeEvent();
    this._listChange.subscribe(
      businessList => this.businesses = businessList,
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    //this._listChange.unsubscribe();
  }

  removeBusiness(business: Business) {
    this._favoritesService.removeBusiness(business);
  }

  /**
   * saveFavorites
   * TODO: triggers an ajax call to the server to save the favorites to the user profile
   */
  saveFavorites() {
    if (this.readOnlyMode) { return; }
    this._favoritesService.saveToServer();
  }

}