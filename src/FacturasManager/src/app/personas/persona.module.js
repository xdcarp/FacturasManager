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
var personas_service_1 = require('../_services/personas/personas.service');
var odd_service_1 = require('../_services/odd/odd.service');
var listaseleccionable_component_1 = require('./_shared/listaseleccionable.component');
var listapersonas_component_1 = require('../personas/lista/listapersonas.component');
var altapersona_component_1 = require('../personas/alta/altapersona.component');
var edicionpersona_component_1 = require('../personas/edicion/edicionpersona.component');
var bajapersona_component_1 = require('../personas/baja/bajapersona.component');
var PersonaModule = (function () {
    function PersonaModule() {
    }
    PersonaModule = __decorate([
        core_1.NgModule({
            declarations: [
                listaseleccionable_component_1.ListaSeleccionablePersonasComponent,
                listapersonas_component_1.ListaPersonasComponent,
                altapersona_component_1.AltaPersonaComponent,
                edicionpersona_component_1.EdicionPersonaComponent,
                bajapersona_component_1.BajaPersonaComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule],
            exports: [],
            providers: [
                personas_service_1.PersonasService,
                odd_service_1.ODDService]
        }), 
        __metadata('design:paramtypes', [])
    ], PersonaModule);
    return PersonaModule;
}());
exports.PersonaModule = PersonaModule;
//# sourceMappingURL=persona.module.js.map