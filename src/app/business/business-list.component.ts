import {Component,OnInit,OnDestroy} from '@angular/core';

import {BusinessComponent} from './business.component.ts';
import {BusinessService} from './business.service';

import {Business} from '../../schemas/Business.ts';


@Component({
  selector:'business-list',
  template: `
  <h3>Results</h3>
  <business *ngFor="let businessData of businesses" [business-data]=businessData > 
  </business>
  `,
  styles:[`
  `],
  directives:[BusinessComponent]
})

export class BusinessListComponent implements OnInit,OnDestroy{
  businesses:Business[] = [];
  private _listchange;

  constructor(private _businessService:BusinessService) {  }

  ngOnInit(){
    this._listchange = this._businessService.getListChangeEvent();
    this._listchange.subscribe(employeeList => this.businesses = employeeList);
  }

  ngOnDestroy(){
    this._listchange.unsubscribe();
  }
}

