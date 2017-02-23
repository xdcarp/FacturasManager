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
var ListaOddComponent = (function () {
    function ListaOddComponent(oddService) {
        this.oddService = oddService;
        this.listaOdds = [];
        this.listaOdds = oddService.getODDs();
    }
    ListaOddComponent = __decorate([
        core_1.Component({
            selector: 'listaodd',
            template: require('./listaodd.component.html')
        }), 
        __metadata('design:paramtypes', [odd_service_1.ODDService])
    ], ListaOddComponent);
    return ListaOddComponent;
}());
exports.ListaOddComponent = ListaOddComponent;
//# sourceMappingURL=listaodd.component.js.map