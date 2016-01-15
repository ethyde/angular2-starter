import { Component, View } from'angular2/core';;

@Component({
    selector: 'hello',
    properties: ['who']
})

@View({
    templateUrl: 'app/components/component_name/directives/hello.html'
})

export class Hello {
}