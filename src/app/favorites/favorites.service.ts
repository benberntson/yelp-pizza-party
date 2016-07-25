import {Injectable, EventEmitter} from '@angular/core';
import {Business} from '../../schemas/Business';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FavoritesService {
  listOfFavorites: Business[][] = [];
  favorites: Business[] = [];
  possibleFavorites: Business[] = [];
  listOfFavoritesChange: EventEmitter<Business[][]> = new EventEmitter<Business[][]>();
  favoritesChange: EventEmitter<Business[]> = new EventEmitter<Business[]>();

  constructor(
    private _http: Http
  ) { }

  emitListChange() {
    this.favoritesChange.emit(this.favorites);
  }

  getListChangeEvent() {
    return this.favoritesChange;
  }

  emitListOfChange(){
    this.listOfFavoritesChange.emit(this.listOfFavorites);
  }

  getListOfChangeEvent(){
    return this.listOfFavoritesChange;
  }

  addPossibleFavorite(businesses: Business[]) {
    businesses.forEach(biz => {
      if (this.possibleFavorites.indexOf(biz) === -1 && biz) {
        this.possibleFavorites.push(biz);
      }
    })
  }


  saveAllToFavorites() {
    this.addBusinesses(this.possibleFavorites);
    this.saveToServer();
  }

  saveToServer(name?:string) {
    if(this.favorites.length === 0){ return; }
    name = name || `${this.favorites[0].name} list`;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let body = {
      name: name,
      businesses: this.favorites
    };
    return this._http.post(`/favorites/?token=${localStorage.getItem('token') ?
      localStorage.getItem('token') : ''}`, body, headers)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()))
      .subscribe(data => {
        console.log(data);
        this.emitListChange();
      },
      error => console.log(error))
  }

  getFavoritesFromServer() {
    return this._http.get(`/favorites`)
      .map(data => data.json())
      .catch(error => Observable.throw(error))
      .subscribe(data => {
        this.listOfFavorites = data.map(datum => datum.businesses);
        this.emitListOfChange();
      },
      err => console.log(err));
  }

  addBusiness(biz: Business) {
    if (this.favorites.indexOf(biz) === -1 && biz) {
      this.favorites.push(biz);
      this.emitListChange();
    }
  }

  removeBusiness(biz: Business) {
    if (this.favorites.indexOf(biz) !== -1) {
      this.favorites.splice(this.favorites.indexOf(biz), 1);
      this.emitListChange();
    }
  }

  /**
   * addBusinesses
   * 
   * adds each Businesses in an array of Businesses 
   * (this.businesses)
   * if that business is not already contained within
   * the current this.businesses array.
   */
  addBusinesses(theBusinesses: Business[]) {
    theBusinesses.forEach(business => this.addBusiness(business));
    this.emitListChange();
  }

  /**
   * isFavorited
   * 
   * 
   */
  isFavorited(business: Business) {
    return this.favorites.indexOf(business) !== -1;
  }
}