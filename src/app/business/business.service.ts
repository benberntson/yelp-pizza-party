import {Injectable,EventEmitter} from '@angular/core';
import {Http,Headers,Response} from '@angular/http'

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {Business,toBusiness} from '../../schemas/Business';
import {businessListMock} from '../../mocks/business-list-mock';

@Injectable()
export class BusinessService{
  businesses:Business[] = businessListMock;
  listChange:EventEmitter<Business[]> = new EventEmitter<Business[]>();
  constructor(private _http:Http){}

  getBusinesses(location:string){
    return this._http.get(`/yelp/search/${location}`)
                     .map(response => response.json())
                     .catch(error => Observable.throw(error.json()));
  }

  emitListChange(){
    this.listChange.emit(this.businesses);
  }

  getListChangeEvent(){
    return this.listChange;
  }
}