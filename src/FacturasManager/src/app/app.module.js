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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var material_1 = require('@angular/material');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var menu_service_1 = require('./_services/menu.service');
var personas_service_1 = require('./_services/personas/personas.service');
var odd_service_1 = require('./_services/odd/odd.service');
var clickAfuera_directive_1 = require('./_directives/clickAfuera.directive');
var pageNotFound_component_1 = require('./shared/pageNotFound.component');
var mainNavBar_component_1 = require('./mainNavBar/mainNavBar.component');
var sidebarNav_component_1 = require('./sidebarNav/sidebarNav.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var footerNav_component_1 = require('./footerNav/footerNav.component');
var listaseleccionable_component_1 = require('./personas/_shared/listaseleccionable.component');
var listapersonas_component_1 = require('./personas/lista/listapersonas.component');
var altapersona_component_1 = require('./personas/alta/altapersona.component');
var edicionpersona_component_1 = require('./personas/edicion/edicionpersona.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                material_1.MaterialModule.forRoot(),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                pageNotFound_component_1.PageNotFoundComponent,
                mainNavBar_component_1.MainNavBar,
                sidebarNav_component_1.SidebarNav,
                dashboard_component_1.Dashboard,
                footerNav_component_1.FooterNav,
                listaseleccionable_component_1.ListaSeleccionablePersonasComponent,
                listapersonas_component_1.ListaPersonasComponent,
                altapersona_component_1.AltaPersonaComponent,
                edicionpersona_component_1.EdicionPersonaComponent,
                clickAfuera_directive_1.ClickAfueraDirective
            ],
            providers: [menu_service_1.MenuesService, personas_service_1.PersonasService, odd_service_1.ODDService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map