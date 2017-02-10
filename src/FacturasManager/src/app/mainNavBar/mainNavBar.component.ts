import { Component, OnInit, trigger, state, transition, animate, style } from '@angular/core';

@Component({
    selector: 'mainnavbar',
    template: require('./mainNavBar.component.html'),
    animations: [
        trigger('slideInOut', [
          state('in', style({
            transform: 'translate3d(-100%, 0, 0)'
          })),
          state('out', style({
            transform: 'translate3d(0, 0, 0)'
          })),
          transition('in => out', animate('400ms ease-in-out')),
          transition('out => in', animate('400ms ease-in-out'))
        ]),
  ]    
})
export class MainNavBar implements OnInit {
    
    menuState: string;

    constructor() { }

    ngOnInit() {
        this.menuState = 'in';        
    }

    toggleMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
}