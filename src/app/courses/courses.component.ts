import { Component, OnInit } from '@angular/core';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  faArrowLeftLong = faArrowLeftLong;

  constructor() { }

  ngOnInit(): void {
  }

}
