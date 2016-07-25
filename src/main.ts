import './shims';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {appRouterProviders} from './app/app.routes';
import {LocationStrategy,HashLocationStrategy} from "@angular/common";
import {provide} from "@angular/core";

import {AppComponent} from './app/app.component.ts';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {BusinessService} from './app/business/business.service';
import {FavoritesService} from './app/favorites/favorites.service';
import {LoginService} from './app/user/login.service';

bootstrap(AppComponent,[
  LoginService,
  BusinessService,
  SlimLoadingBarService,
  FavoritesService,
  appRouterProviders,
  {provide:LocationStrategy,useClass:HashLocationStrategy},
  HTTP_PROVIDERS, 
]);



