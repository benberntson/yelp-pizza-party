import {Component, Input} from '@angular/core';

import {Business} from '../../schemas/Business';
import {Address} from '../../schemas/Address';
import {FavoritesService} from '../favorites/favorites.service';
import {businessMock} from '../../mocks/business-mock';

@Component({
  selector: 'business',
  template: `
  <div class='panel panel-default'>
    <div class='panel panel-heading'>
    <h2 class='panel-title'>{{businessData.name}}</h2>
    </div>
    <div class='panel-body'>
    <div class='address'>
    <div>{{getAddress()}}</div>
    <div>{{businessData.location.city}},
    {{businessData.location.state_code}}
    {{businessData.location.postal_code}}</div>
    {{phoneNum(businessData.phone)}}
    <a [href]="businessData.url" target="_blank">Yelp! link</a>
    </div>
    <img [src]="businessData.image_url ? businessData.image_url : 'images/no-image.png'" height="100" width="100">
    <div *ngIf="businessData.rating" class="ratings-reviews">
    <span class='ratings'>
    Rating: <span class="badge">{{businessData.rating}}</span>
    </span>
      <br>
     <i class="reviews">
      *Based on {{businessData.review_count}} reviews
      </i>
      <br>
      <br>
      <div class="example-review">
      Example Review: <i>"{{businessData.snippet_text}}"</i> &#8212; Yelp User
      </div>
      </div>           
    </div>
  </div>
  `,
  styles: [`
    div.panel.panel-default{
      width:370px;
    }
    .address{
      display:inline-block;
      width: 160px;
    }
    img{
      position:relative;
      display:inline-block;
      width: 100px;
      height: 100px;
      margin-left:60px;
    }   
    .panel{
      color: white;
      border-radius: 0px;
      border-color:rgba(0,0,0,0.5);
      border-bottom: 1px;
      font-size: 100%;     
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
      font-size: 100%;
      margin-left:30px;
    }
    .reviews{
      display: inline-block;
      position:relative;
      width: 100px;
      left:110px;
      font-size: 80%;
    }
    .ratings-reviews{
      font-size: 100%;
    }
  `]
})

export class BusinessComponent {
  @Input('business-data') businessData: Business;

  constructor() { }

  getAddress() {
    if (typeof this.businessData.location.address === 'undefined') { return "" };
    return this.businessData.location.address.join('\n');
  }

  phoneNum(phoneNumber: string): string {
    if (phoneNumber) {
      //phone number regex
      const PN_REGEX = /^(\d{3})(\d{3})(\d{4})$/;
      return phoneNumber.replace(PN_REGEX, '($1) $2-$3');
    } else {
      return '';
    }
  }
}