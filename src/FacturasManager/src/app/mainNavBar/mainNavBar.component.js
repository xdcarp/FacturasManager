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
var menu_service_1 = require('../_services/menu.service');
var MainNavBar = (function () {
    function MainNavBar(menuService) {
        this.menuService = menuService;
        this.menuPrincipalOpts = this.menuService.getOpcionesMenuPrincipal();
    }
    MainNavBar.prototype.ngOnInit = function () {
        this.menuState = 'in';
    };
    MainNavBar.prototype.toggleMenu = function (itemSeleccionado) {
        this.opciones = itemSeleccionado.opciones;
    };
    MainNavBar.prototype.esconderBarra = function (event) {
        if (this.menuPrincipalOpts.find(function (opcion) { return opcion.name == event.innerText; }) ||
            this.opciones.find(function (opt) { return opt == event.innerText; })) {
            this.menuState = 'out';
        }
        else {
            this.menuState = 'in';
        }
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
        __metadata('design:paramtypes', [menu_service_1.MenuesService])
    ], MainNavBar);
    return MainNavBar;
}());
exports.MainNavBar = MainNavBar;
//# sourceMappingURL=mainNavBar.component.js.map