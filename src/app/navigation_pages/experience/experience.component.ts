import { Component, OnInit } from '@angular/core';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
  faArrowDownLong = faArrowDownLong;

  constructor(private router: Router, route: ActivatedRoute) { }

  ngOnInit(): void { }
}
