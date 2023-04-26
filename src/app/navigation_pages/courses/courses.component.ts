import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { NavigationBaseComponent } from '../navigation_base';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent extends NavigationBaseComponent implements OnInit {
  
  faArrowLeftLong = faArrowLeftLong;

  constructor(private router: Router, route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.disableAnimation();
  }
}
