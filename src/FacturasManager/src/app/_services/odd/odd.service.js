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
var odd_1 = require('./odd');
var ODDService = (function () {
    function ODDService() {
        this.objetosDeDeseo = [
            new odd_1.ODD(1, 'Facturas'),
            new odd_1.ODD(2, 'Yerba'),
            new odd_1.ODD(3, 'Café')
        ];
    }
    ODDService.prototype.getODDs = function () {
        return this.objetosDeDeseo;
    };
    ODDService.prototype.getODDsByPersona = function (idPersona) {
        //TODO: servicio que trae los odds de una persona en particular
    };
    ODDService.prototype.addODD = function (nombre) {
        //TODO: servicio que da de alta al odd
    };
    ODDService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ODDService);
    return ODDService;
}());
exports.ODDService = ODDService;
//# sourceMappingURL=odd.service.js.map