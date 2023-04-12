import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faArrowRightLong = faArrowRightLong;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initAnimation();
  }

  private initAnimation() {
    const textWriters: NodeListOf<Element> = document.querySelectorAll('.textWriter');
    Array.from(textWriters).forEach(async (element, index) => {
      element.classList.add('hidden');

      new Promise<void>(() => setTimeout(() => {
        element.classList.remove('hidden');
        element.classList.add('typewriter');
      }, 2000 * index));

      new Promise<void>(() => setTimeout(() => {
        element.classList.remove('typewriter');
      }, 2000 * (index + 1)));
    });
  }
}
