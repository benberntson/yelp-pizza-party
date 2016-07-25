import {Component,Input} from '@angular/core';

import {MiniBusinessComponent} from '../business/mini-business.component';
import {Business} from '../../schemas/Business';

@Component({
  selector:'favorites-list',
  template: `
  <h4>{{name}}</h4>
  <mini-business *ngFor="let biz of favorites" [business-data]="biz"></mini-business>
  <button (click)="logFavs()">log</button>
  `,
  styles:[`
    
  `],
  directives:[MiniBusinessComponent]
})
export class FavoritesListComponent{
  @Input('name')name:string;
  @Input('favorites')favorites:Business[];
  constructor(){}

  logFavs(){
    console.log(this.favorites);
  }

}