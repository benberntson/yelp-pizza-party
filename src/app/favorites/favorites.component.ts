import {Component, OnInit, EventEmitter} from '@angular/core';
import {FavoritesService} from './favorites.service';
import {FavoritesListComponent} from './favorites-list.component';
import {Business} from '../../schemas/Business';

@Component({
  selector: 'favorites',
  template: `
  <div class="container">
    <div class="well well-lg">
      <h2>Favorites</h2>
      <favorites-list *ngFor="let favorites of listOfFavorites" 
      [favorites]="favorites" >
      
      </favorites-list>
      <button class="btn btn-default" (click)="updateListOfFavorites()">Get List of Favs</button>
    </div>
  </div>
  `,
  styles: [`
  `],
  directives: [FavoritesListComponent]
})
export class FavoritesComponent implements OnInit {
  listOfFavorites: { name: string, list: Business[] }[] = [];
  private _newListEvent: EventEmitter<Business[][]>;
  constructor(
    private _favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    this._newListEvent = this._favoritesService.getListOfChangeEvent();
    this._newListEvent.subscribe(
      listOfFavorites => {
        this.listOfFavorites = listOfFavorites;
        console.log(`Client side favs: ${this.listOfFavorites}`)
      }
      ,
      error => console.log(error)
    );
  }

  updateListOfFavorites() {
    this._favoritesService.getFavoritesFromServer();
  }

}
