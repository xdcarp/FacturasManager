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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var shared_module_1 = require('../shared/shared.module');
var personas_service_1 = require('../_services/personas/personas.service');
var odd_service_1 = require('../_services/odd/odd.service');
var listaodd_component_1 = require('../odd/lista/listaodd.component');
var altaodd_component_1 = require('../odd/alta/altaodd.component');
var edicionodd_component_1 = require('../odd/edicion/edicionodd.component');
var bajaodd_component_1 = require('../odd/baja/bajaodd.component');
var ODDModule = (function () {
    function ODDModule() {
    }
    ODDModule = __decorate([
        core_1.NgModule({
            declarations: [
                listaodd_component_1.ListaOddComponent,
                altaodd_component_1.AltaOddComponent,
                bajaodd_component_1.BajaOddComponent,
                edicionodd_component_1.EdicionOddComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule,
                shared_module_1.SharedModule
            ],
            exports: [],
            providers: [
                personas_service_1.PersonasService,
                odd_service_1.ODDService]
        }), 
        __metadata('design:paramtypes', [])
    ], ODDModule);
    return ODDModule;
}());
exports.ODDModule = ODDModule;
//# sourceMappingURL=odd.module.js.map