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
var odd_service_1 = require('../../_services/odd/odd.service');
var personas_service_1 = require('../../_services/personas/personas.service');
var persona_1 = require('../../_services/personas/persona');
var VerPlanComponent = (function () {
    function VerPlanComponent(oddService, personaService) {
        this.oddService = oddService;
        this.personaService = personaService;
        this.simpleDrop = null;
        this.listaOdds = [];
        this.listadoPersonas = [];
        this.listadoPersonasQueDejanDeTraer = [
            new persona_1.Persona(0, "Ninguno")
        ];
        this.listaOdds = oddService.getODDs();
        this.listadoPersonas = personaService.getPersonasByLoQueTraen();
    }
    VerPlanComponent = __decorate([
        core_1.Component({
            selector: 'verplan',
            template: require('./verplan.component.html')
        }), 
        __metadata('design:paramtypes', [odd_service_1.ODDService, personas_service_1.PersonasService])
    ], VerPlanComponent);
    return VerPlanComponent;
}());
exports.VerPlanComponent = VerPlanComponent;
//# sourceMappingURL=verplan.component.js.map