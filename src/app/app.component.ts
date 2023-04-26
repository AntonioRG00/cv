import { Component, OnChanges, OnInit } from '@angular/core';
import { slideToTheRight, slideToTheTop, slideToTheLeft, slideToTheBottom, slideInAnimation } from './app.animation';
import { ChildrenOutletContexts, NavigationStart, Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {

  constructor(router: Router, private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
