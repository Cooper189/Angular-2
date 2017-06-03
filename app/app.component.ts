import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `<div><h1>{{name}}</h1></div>`
})
export class AppComponent {
    name: string = 'Hello world';
}

