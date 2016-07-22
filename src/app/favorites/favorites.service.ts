import {Injectable, EventEmitter} from '@angular/core';
import {Business} from '../../schemas/Business';

@Injectable()
export class FavoritesService {
  favorites: Business[] = [];
  possibleFavorites: Business[] = [];
  favoritesChange: EventEmitter<Business[]> = new EventEmitter<Business[]>();

  emitListChange() {
    this.favoritesChange.emit(this.favorites);
  }

  getListChangeEvent() {
    return this.favoritesChange;
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
    //thank arrow functions for dat lexical binding
    theBusinesses.forEach(business => {
      if (this.favorites.indexOf(business) === -1 && business) {
        this.favorites.push(business);
      }
    });
    this.emitListChange();
  }

  isFavorited(business: Business) {
    return this.favorites.indexOf(business) !== -1;
  }
}