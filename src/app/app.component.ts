import { Component, OnChanges, OnInit } from '@angular/core';
import { slideToTheRight, slideToTheTop, slideToTheLeft, slideToTheBottom } from './app.animation';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideToTheRight, slideToTheTop, slideToTheLeft, slideToTheBottom]
})
export class AppComponent {

  constructor(router: Router) { }

  activateslideToTheRight(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] === 'slideToTheRight';
  }

  activateSlideToTheTop(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] === 'slideToTheTop';
  }

  activateslideToTheLeft(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] === 'slideToTheLeft';
  }

  activateSlideToTheBottom(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] === 'slideToTheBottom';
  }
}
