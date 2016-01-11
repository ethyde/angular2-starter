/*
 * Providers provided by Angular
 */
import {bootstrap}  from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {APP} from './app/app';

bootstrap(APP, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);