import './shims';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
//import { ROUTE_PROVIDERS } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { provide } from "@angular/core";

import {AppComponent} from './app/app.component.ts';
import {BusinessService} from './app/business/business.service';

bootstrap(AppComponent,[
  HTTP_PROVIDERS,
  BusinessService
]);



