import { Component } from '@angular/core';

@Component({ template: '...' })
export class NavigationBaseComponent {


    constructor() {
    }

    public disableAnimation() {
        setTimeout(() => {
        }, 2000);
    }
}
