import { trigger, animate, transition, style, group, query } from '@angular/animations';

export const slideToTheRight = trigger('slideToTheRight', [
  transition('* <=> *', [
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
  ])
]);

export const slideToTheLeft = trigger('slideToTheLeft', [
  transition('* <=> *', [
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
  ])
]);

export const slideToTheTop = trigger('slideToTheTop', [
  transition('* <=> *', [
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
  ])
]);

export const slideToTheBottom = trigger('slideToTheBottom', [
  transition('* <=> *', [
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
  ])
]);