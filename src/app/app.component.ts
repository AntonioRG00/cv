import { Component, OnChanges, OnInit } from '@angular/core';
import { slideToTheRight, slideToTheTop, slideToTheLeft, slideToTheBottom } from './app.animation';
import { NavigationStart, Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideToTheRight, slideToTheTop, slideToTheLeft, slideToTheBottom]
})
export class AppComponent {

  private navigationData = {
    currentUrl: '',
    previousUrl: ''
  }

  animations = {
    'slideToTheRight': () => {
      return (this.navigationData.previousUrl === 'home' && this.navigationData.currentUrl === 'experience') 
        || (this.navigationData.previousUrl === 'contact' && this.navigationData.currentUrl === 'courses');
    },
    'slideToTheBottom': () => {
      return (this.navigationData.previousUrl === 'experience' && this.navigationData.currentUrl === 'courses');
    },
    'slideToTheLeft': () => {
      return (this.navigationData.previousUrl === 'courses' && this.navigationData.currentUrl === 'contact') 
        || (this.navigationData.previousUrl === 'experience' && this.navigationData.currentUrl === 'home');
    },
    'slideToTheTop': () => {
      return this.navigationData.previousUrl === 'courses' && this.navigationData.currentUrl === 'experience';
    },
    'none': () => {
      return !this.animations['slideToTheRight']() && !this.animations['slideToTheBottom']() && !this.animations['slideToTheLeft']() && !this.animations['slideToTheTop']();
    }
  }

  constructor(router: Router) {
    router.events.pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise()).subscribe((events: RoutesRecognized[]) => {
      this.navigationData.previousUrl = events[0].urlAfterRedirects.replace('/', '');
      this.navigationData.currentUrl = events[1].urlAfterRedirects.replace('/', '');

      console.debug('Navigation data: ', this.navigationData);
      console.debug('Slide Right: ', this.animations['slideToTheRight']());
      console.debug('Slide Bottom: ', this.animations['slideToTheBottom']());
      console.debug('Slide Left: ', this.animations['slideToTheLeft']());
      console.debug('Slide Top: ', this.animations['slideToTheTop']());
    });
  }
}
