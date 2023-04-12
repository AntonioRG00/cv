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
    try {
      return outlet.activatedRouteData['animation'] === 'slideToTheRight';
    } finally {
      this.disableAnimation(outlet);
    }
  }

  activateSlideToTheTop(outlet: RouterOutlet) {
    try {
      return outlet.activatedRouteData['animation'] === 'slideToTheTop';
    } finally {
      this.disableAnimation(outlet);
    }
  }

  activateslideToTheLeft(outlet: RouterOutlet) {
    try {
      return outlet.activatedRouteData['animation'] === 'slideToTheLeft';
    } finally {
      this.disableAnimation(outlet);
    }
  }

  activateSlideToTheBottom(outlet: RouterOutlet) {
    try {
      return outlet.activatedRouteData['animation'] === 'slideToTheBottom';
    } finally {
      this.disableAnimation(outlet);
    }
  }

  disableAnimation(outlet: RouterOutlet) {
    outlet.activatedRouteData['animation'] = 'none';
  }
}
