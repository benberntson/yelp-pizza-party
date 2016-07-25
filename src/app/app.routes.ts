import {provideRouter, RouterConfig} from '@angular/router';
import {BusinessListComponent} from './business/business-list.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './user/signup.component';
import {SigninComponent} from './user/signin.component';
import {FavoritesComponent} from './favorites/favorites.component';

const routes: RouterConfig = [
  { path: 'search', component: BusinessListComponent },
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'favorites', component: FavoritesComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];