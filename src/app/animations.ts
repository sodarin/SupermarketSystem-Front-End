/**
 * Created by ZhangHaodong on 2017/10/24.
 */
import {trigger, transition, animate, style, query, group, keyframes, state} from '\@angular/animations';
import {stagger} from "@angular/core/src/animation/dsl";

export const routeAnimation =
  trigger('routeAnimation', [
    transition('* => home', [
      query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
      group([
        query(':enter', [style({transform: 'translateX(100%)'}), animate('.5s .5s cubic-bezier(0.2, 0.5, 0.3, 1.1)', style({transform: 'translateX(0%)'}))], {optional: true}),
        query(':leave', [style({transform: 'translateX(0%)'}), animate('.5s .5s cubic-bezier(0.2, 0.5, 0.3, 1.1)', style({transform: 'translateX(-100%)'}))], {optional: true})
      ])
    ]),
    transition('* => login', [
      query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
      group([
        query(':enter', [style({transform: 'translateX(100%)'}), animate('.5s .5s cubic-bezier(0.2, 0.5, 0.3, 1.1)', style({transform: 'translateX(0%)'}))], {optional: true}),
        query(':leave', [style({transform: 'translateX(0%)'}), animate('.5s .5s cubic-bezier(0.2, 0.5, 0.3, 1.1)', style({transform: 'translateX(-100%)'}))], {optional: true})
      ])
    ]),
    transition('home => product', [
      query(':leave, :enter', style({position: 'fixed', width: '100%'}), {optional: true}),
      query(':enter', style({opacity:0})),
      group([
        query('.productCard', [style({opacity: 1}), animate('.3s', style({opacity: 0, transform: 'scale(5, 5)'}))], {optional: true}),
        query(':leave', [style({opacity: 1}), animate('.3s', style({opacity: 0}))], {optional: true})
      ]),
      query(':enter', [style({opacity: 0}), animate('.25s', style({opacity: 1}))], {optional: true}),
    ])
    ]);
