import { Component, View } from 'angular2/core';

import { Hello } from './directives/hello';

@Component({
    selector: 'name-app'
})

@View({
    directives: [Hello],
    templateUrl: 'app/components/component_name/component_name.html'
})

export class App {
}