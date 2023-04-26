import { Component, OnInit } from '@angular/core';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { NavigationBaseComponent } from '../navigation_base';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent extends NavigationBaseComponent implements OnInit {
  
  faArrowDownLong = faArrowDownLong;

  constructor(private router: Router, route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.disableAnimation();
  }
}
