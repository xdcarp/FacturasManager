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
var PersonasService = (function () {
    function PersonasService() {
        this.personas = [
            new Persona('Gaby Gutierrez', true, '112223334'),
            new Persona('Dario Furman', false, '116666552'),
            new Persona('Gonzalo de la Vega', true, '116666552'),
            new Persona('Federico Palumbo', true, '116666552'),
            new Persona('Rodrigo Pereira', false, '116666552'),
        ];
    }
    PersonasService.prototype.getPersonas = function () {
        return this.personas;
    };
    PersonasService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PersonasService);
    return PersonasService;
}());
exports.PersonasService = PersonasService;
/**
 * Persona
 */
var Persona = (function () {
    function Persona(elnombre, quieretraerODD, eltelefono) {
        this.nombreyapellido = elnombre;
        this.traeODD = quieretraerODD;
        this.telefono = eltelefono;
    }
    return Persona;
}());
//# sourceMappingURL=personas.service.js.map