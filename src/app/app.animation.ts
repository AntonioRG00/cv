import { trigger, animate, transition, style, group, query, animateChild } from '@angular/animations';

export const slideToTheRight = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('0.7s ease-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.7s ease-out', style({ transform: 'translateX(-100%)' }))
    ], { optional: true })
  ])
];

export const slideToTheLeft = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.7s ease-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.7s ease-out', style({ transform: 'translateX(100%)' }))
    ], { optional: true })
  ])
];

export const slideToTheTop = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.7s ease-out', style({ transform: 'translateY(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.7s ease-out', style({ transform: 'translateY(-100%)' }))
    ], { optional: true })
  ])
];

export const slideToTheBottom = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('0.7s ease-out', style({ transform: 'translateY(0%)' }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.7s ease-out', style({ transform: 'translateY(100%)' }))
    ], { optional: true })
  ])
];

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomeComponent => ExperienceComponent', slideToTheRight),
  transition('ExperienceComponent => HomeComponent', slideToTheLeft),
  transition('ExperienceComponent => CoursesComponent', slideToTheTop),
  transition('CoursesComponent => ExperienceComponent', slideToTheBottom),
  transition('CoursesComponent => ContactComponent', slideToTheLeft),
  transition('ContactComponent => CoursesComponent', slideToTheRight)
]);