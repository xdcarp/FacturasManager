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
var pageNotFound_component_1 = require('./shared/pageNotFound.component');
var listapersonas_component_1 = require('./personas/lista/listapersonas.component');
var altapersona_component_1 = require('./personas/alta/altapersona.component');
var edicionpersona_component_1 = require('./personas/edicion/edicionpersona.component');
var bajapersona_component_1 = require('./personas/baja/bajapersona.component');
var routes = [
    { path: '', component: listapersonas_component_1.ListaPersonasComponent },
    { path: 'listado-personas', component: listapersonas_component_1.ListaPersonasComponent },
    { path: 'alta-persona', component: altapersona_component_1.AltaPersonaComponent },
    { path: 'editar-persona', component: edicionpersona_component_1.EdicionPersonaComponent },
    { path: 'baja-persona', component: bajapersona_component_1.BajaPersonaComponent },
    // { path: '**', component: PageNotFoundComponent },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            providers: [],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map