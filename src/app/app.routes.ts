import {provideRouter, RouterConfig} from '@angular/router';
import {BusinessListComponent} from './business/business-list.component';

const routes: RouterConfig = [
  { path: 'search', component: BusinessListComponent },
  { path: '',component:BusinessListComponent}
];

export const appRouterProviders = [
  provideRouter(routes)
];