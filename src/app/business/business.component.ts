import {Component} from '@angular/core';

import {Business} from '../../schemas/Business';
import {Address} from '../../schemas/Address';

import {businessMock} from '../../mocks/business-mock';


@Component({
  selector: 'business',
  template: `
  <div class='panel panel-default'>
    <div class='panel panel-heading'>
    <h2 class='panel-title'>{{business.name}}</h2>
    </div>
    <div class='panel-body'>
    <img [src]="business.image_url">
    <div *ngIf="business.rating" class="ratings-reviews">
    <span class='ratings'>
    Rating: <span class="badge">{{business.rating}}</span>
    </span>
     <i class="reviews">
      *Based on {{business.review_count}} reviews
      </i>
      <div class="example-review">
      <i>"{{business.snippet_text}}"</i> &#8212; Yelp User
      </div>
      </div>           
    </div>
  </div>
  `,
  styles: [`
    .panel{
      color: white;
      border-radius: 0px;
      border-color:rgba(0,0,0,0.5);
      border-bottom: 1px;
     
    }
    .panel-default{
      background: rgba(9,9,9,0.75);
    }
    .panel-heading{
      background: #333435;
      border: 1px;
      border-color:rgba(0,0,0,0.5);
      margin-bottom:0px;
    }
    .panel-body{    
      background: rgba(9,9,9,0.75);
    }
    .ratings{
      display: inline-block;
      width: 120px;
      font-size: 100%;
    }
    .reviews{
      display: inline-block;
      width: 121px;
      font-size: 80%;
    }
    .ratings-reviews{
      font-size: 100%;
    }
    .review-example{
      font-size:10%;
    }
  `]
})

export class BusinessComponent {
  business: Business = businessMock;

  constructor() { }


}