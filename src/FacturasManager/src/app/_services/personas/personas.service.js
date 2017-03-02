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
var persona_1 = require('./persona');
var odd_1 = require('../odd/odd');
var odd_service_1 = require('../odd/odd.service');
var PersonasService = (function () {
    function PersonasService(oddService) {
        this.oddService = oddService;
        this.odds1 = [
            new odd_1.ODD(1, 'Facturas'),
            new odd_1.ODD(2, 'Yerba'),
            new odd_1.ODD(3, 'Café')
        ];
        this.odds2 = [
            new odd_1.ODD(1, 'Facturas'),
            new odd_1.ODD(2, 'Yerba')
        ];
        this.odds3 = [
            new odd_1.ODD(1, 'Facturas')
        ];
        this.personas = [
            new persona_1.Persona(1, 'Gaby Gutierrez', true, '112223334', this.odds1),
            new persona_1.Persona(2, 'Dario Furman', false, '116667652', this.odds1),
            new persona_1.Persona(3, 'Gonzalo de la Vega', true, '116669052', this.odds2),
            new persona_1.Persona(4, 'Federico Palumbo', true, '116446552', this.odds2),
            new persona_1.Persona(5, 'Rodrigo Pereira', false, '116678552', this.odds3),
        ];
    }
    PersonasService.prototype.getPersonas = function () {
        return this.personas;
    };
    PersonasService.prototype.getPersonaById = function (idPersona) { };
    PersonasService.prototype.getPersonaByNombreyApellido = function (nombreyapellido) { };
    PersonasService.prototype.getPersonasByLoQueTraen = function (oddAFiltrar) {
        //TODO: cambiar por la consulta al servicio que corresponda
        return this.personas;
    };
    PersonasService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [odd_service_1.ODDService])
    ], PersonasService);
    return PersonasService;
}());
exports.PersonasService = PersonasService;
//# sourceMappingURL=personas.service.js.map