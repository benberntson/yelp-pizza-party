import {Component} from '@angular/core';
import {BusinessComponent} from './business/business.component';
import {BusinessSearchComponent} from './business/business-search.component';
import {BusinessListComponent} from './business/business-list.component';

@Component({
  selector: 'app',
  template: `
    <business-search></business-search>
    <business-list></business-list>
  `,
  directives: [
    BusinessComponent,
    BusinessSearchComponent,
    BusinessListComponent
    ]
})
export class AppComponent{ }