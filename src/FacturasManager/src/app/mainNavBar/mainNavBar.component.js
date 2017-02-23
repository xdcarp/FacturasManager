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
var sidebarNav_service_1 = require('../_services/sidebarNav/sidebarNav.service');
var MainNavBar = (function () {
    function MainNavBar(menuService, sidebarNavService) {
        this.menuService = menuService;
        this.sidebarNavService = sidebarNavService;
        this.menuPrincipalOpts = this.menuService.getOpcionesMenuPrincipal();
    }
    MainNavBar.prototype.showSideBar = function (itemSeleccionado) {
        this.sidebarNavService.newConfig(itemSeleccionado.opciones, itemSeleccionado.rutas);
    };
    MainNavBar = __decorate([
        core_1.Component({
            selector: 'mainnavbar',
            template: require('./mainNavBar.component.html')
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuesService, sidebarNav_service_1.SidebarNavService])
    ], MainNavBar);
    return MainNavBar;
}());
exports.MainNavBar = MainNavBar;
//# sourceMappingURL=mainNavBar.component.js.map