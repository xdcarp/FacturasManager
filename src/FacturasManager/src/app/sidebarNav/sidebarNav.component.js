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
var SidebarNav = (function () {
    function SidebarNav(menuService) {
        this.menuService = menuService;
    }
    SidebarNav.prototype.setOpcionSeleccionada = function (nuevoValor) {
        if (this.esLaOpcionActiva === nuevoValor) {
            this.esLaOpcionActiva = 0;
        }
        else {
            this.esLaOpcionActiva = nuevoValor;
        }
    };
    __decorate([
        core_1.Input('opciones'), 
        __metadata('design:type', Array)
    ], SidebarNav.prototype, "opciones", void 0);
    SidebarNav = __decorate([
        core_1.Component({
            selector: 'sidebarNav',
            template: require('./sidebarNav.component.html')
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuesService])
    ], SidebarNav);
    return SidebarNav;
}());
exports.SidebarNav = SidebarNav;
//# sourceMappingURL=sidebarNav.component.js.map