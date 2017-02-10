"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MainNavBar = (function () {
    function MainNavBar() {
        this.menuState = 'out';
    }
    MainNavBar.prototype.ngOnInit = function () { };
    MainNavBar.prototype.toggleMenu = function () {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    MainNavBar = __decorate([
        core_1.Component({
            selector: 'mainnavbar',
            template: require('./mainNavBar.component.html'),
            animations: [
                core_1.trigger('slideInOut', [
                    core_1.state('in', core_1.style({
                        transform: 'translate3d(-100%, 0, 0)'
                    })),
                    core_1.state('out', core_1.style({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    core_1.transition('in => out', core_1.animate('400ms ease-in-out')),
                    core_1.transition('out => in', core_1.animate('400ms ease-in-out'))
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MainNavBar);
    return MainNavBar;
}());
exports.MainNavBar = MainNavBar;
//# sourceMappingURL=mainNavBar.component.js.map