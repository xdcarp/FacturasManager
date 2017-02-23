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
var router_1 = require('@angular/router');
var menu_service_1 = require('../_services/menu.service');
var backdrop_service_1 = require("../_services/backdrop/backdrop.service");
var sidebarNav_service_1 = require("../_services/sidebarNav/sidebarNav.service");
var SidebarNav = (function () {
    function SidebarNav(sidebarNavService, menuService, router, backdropService) {
        var _this = this;
        this.sidebarNavService = sidebarNavService;
        this.menuService = menuService;
        this.router = router;
        this.backdropService = backdropService;
        this.opciones = [];
        this.rutas = [];
        this.menuState = 'in';
        this.sidebarNavService.Seleccion.subscribe(function (obj) {
            _this.opciones = obj.opciones;
            _this.rutas = obj.rutas;
        });
        this.sidebarNavService.VisibilityChanged.subscribe(function (isVisible) {
            _this.menuState = isVisible ? 'out' : "in";
            if (isVisible) {
                _this.backdropService.show();
            }
            else {
                _this.backdropService.hide();
            }
        });
        this.backdropService.Toggle.subscribe(function (isVisible) {
            if (!isVisible)
                _this.menuState = 'in';
        });
    }
    SidebarNav.prototype.setOpcionSeleccionada = function (nuevoValor, idx) {
        if (this.esLaOpcionActiva === nuevoValor) {
            this.esLaOpcionActiva = 0;
        }
        else {
            this.esLaOpcionActiva = nuevoValor;
        }
        this.router.navigate([this.rutas[idx]]);
    };
    SidebarNav = __decorate([
        core_1.Component({
            selector: 'sidebarNav',
            template: require('./sidebarNav.component.html'),
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
        __metadata('design:paramtypes', [sidebarNav_service_1.SidebarNavService, menu_service_1.MenuesService, router_1.Router, backdrop_service_1.BackdropService])
    ], SidebarNav);
    return SidebarNav;
}());
exports.SidebarNav = SidebarNav;
//# sourceMappingURL=sidebarNav.component.js.map