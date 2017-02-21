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
var backdrop_component_1 = require("../shared/backdrop/backdrop.component");
var SidebarNavService = (function () {
    function SidebarNavService(backdropService) {
        this.backdropService = backdropService;
        this.Seleccion = new core_1.EventEmitter();
        this.isVisible = false;
    }
    SidebarNavService.prototype.show = function () {
        this.isVisible = true;
        // this.Seleccion.emit(this.isVisible);
        this.backdropService.show();
    };
    SidebarNavService.prototype.hide = function () {
        this.isVisible = false;
        // this.Seleccion.emit(this.isVisible);
        this.backdropService.show();
    };
    SidebarNavService.prototype.newConfig = function (opciones, rutas) {
        if (!this.isVisible) {
            this.show();
        }
        this.Seleccion.emit({ opciones: opciones, rutas: rutas });
    };
    SidebarNavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [backdrop_component_1.BackdropService])
    ], SidebarNavService);
    return SidebarNavService;
}());
exports.SidebarNavService = SidebarNavService;
var SidebarNav = (function () {
    function SidebarNav(sidebarNavService, menuService, router, backdropService) {
        var _this = this;
        this.sidebarNavService = sidebarNavService;
        this.menuService = menuService;
        this.router = router;
        this.backdropService = backdropService;
        this.menuState = 'out';
        this.isVisible = false;
        this.opciones = [];
        this.rutas = [];
        this.sidebarNavService.Seleccion.subscribe(function (obj) {
            _this.opciones = obj.opciones;
            _this.rutas = obj.rutas;
        });
        this.backdropService.Toggle.subscribe(function (isVisible) {
            console.log(isVisible);
            _this.menuState = isVisible ? 'out' : "in";
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
        __metadata('design:paramtypes', [SidebarNavService, menu_service_1.MenuesService, router_1.Router, backdrop_component_1.BackdropService])
    ], SidebarNav);
    return SidebarNav;
}());
exports.SidebarNav = SidebarNav;
//# sourceMappingURL=sidebarNav.component.js.map