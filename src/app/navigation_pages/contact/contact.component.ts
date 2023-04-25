import { Component, OnInit } from '@angular/core';
import { NavigationBaseComponent } from '../navigation_base';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends NavigationBaseComponent implements OnInit {

  constructor(private router: Router, route: ActivatedRoute) {
    super(route);
  }

  ngOnInit(): void {
    this.disableAnimation();
  }
}
