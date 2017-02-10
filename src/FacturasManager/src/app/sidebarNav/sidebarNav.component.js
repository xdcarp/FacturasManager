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
        this.menuAMostrar = this.menuService.getOpcionesMenuCrud();
        // if (!this.menuAMostrar || this.idMenuSeleccionado == 1) {
        //     this.menuAMostrar = this.menuService.getOpcionesMenuCrud();
        // }
        // else {
        //     this.menuAMostrar = this.menuService.getOpcionesMenuPlan();
        //  }        
    }
    SidebarNav.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var valorActual = JSON.stringify(chng.currentValue);
            if (valorActual == '1') {
                this.menuAMostrar = this.menuService.getOpcionesMenuCrud();
            }
            else {
                this.menuAMostrar = this.menuService.getOpcionesMenuPlan();
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SidebarNav.prototype, "idMenuSeleccionado", void 0);
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