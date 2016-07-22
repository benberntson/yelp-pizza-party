import {Component, Input} from '@angular/core';

import {Business} from '../../schemas/Business';
import {Address} from '../../schemas/Address';

@Component({
  selector: 'mini-business',
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
  </div>
  `,
  styles: [`
    div.panel.panel-default{
      width:290px;
      margin-top: 5px;
    }
    .address{
      display:inline-block;
      width: 160px;
    }
    img{
      position:relative;
      display:inline-block;
      width: 75px;
      height: 75px;
      margin-left:10px;
      vertical-align:top;
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
      font-size:90%;
    }
    .panel-body{    
      background: rgba(9,9,9,0.75);
    }
  `]
})

export class MiniBusinessComponent{
  @Input('business-data') businessData:Business;
  constructor(){}

  getAddress() {
    if (!this.businessData.location.address) { return "" };
    return this.businessData.location.address.join('\n');
  }

  phoneNum(phoneNumber: string): string {
    if (phoneNumber) {
      const PN_REGEX = /^(\d{3})(\d{3})(\d{4})$/;
      return phoneNumber.replace(PN_REGEX, '($1) $2-$3');
    } else {
      return '';
    }
  }

}