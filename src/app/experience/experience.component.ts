import { Component, OnInit } from '@angular/core';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
  faArrowDownLong = faArrowDownLong;

  constructor() { }

  ngOnInit(): void {
  }

}
