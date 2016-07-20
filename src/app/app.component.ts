import {Component} from '@angular/core';
import {BusinessComponent} from './business/business.component';

import {}
@Component({
  selector: 'app',
  template: `
    <business></business>
  `,
  directives: [BusinessComponent]
})
export class AppComponent{ 
}