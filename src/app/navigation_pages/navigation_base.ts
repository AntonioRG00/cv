import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({ template: '...' })
export class NavigationBaseComponent {

    protected routeData: Data;

    constructor(private route: ActivatedRoute) {
        this.routeData = this.route.snapshot.data;

        // console.debug('NavigationBaseComponent.constructor() -> this.routeData = ', this.routeData);
    }

    public disableAnimation() {
        setTimeout(() => {
            // console.debug('NavigationBaseComponent.disableAnimation() -> this.routeData = ', this.routeData);
            // this.routeData['animation'] = 'none';
        }, 2000);
    }
}
