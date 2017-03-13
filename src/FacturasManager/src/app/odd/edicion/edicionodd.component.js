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
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var odd_1 = require('../../_services/odd/odd');
var odd_service_1 = require('../../_services/odd/odd.service');
var EdicionOddComponent = (function () {
    function EdicionOddComponent(oddService, modalService) {
        var _this = this;
        this.oddService = oddService;
        this.modalService = modalService;
        this.titulo = 'Editar Datos de un Objeto de Deseo';
        this.oddSeleccionado = new odd_1.ODD();
        oddService
            .getODDs()
            .subscribe(function (data) { return _this.listadoOdd = data; }, function (error) { return console.log(error); }, function () { return console.log("getODDs() complete from constructor"); });
        ;
    }
    EdicionOddComponent.prototype.mostraroddSeleccionado = function (oddSeleccionado, content) {
        this.oddSeleccionado = oddSeleccionado;
        this.modalService.open(content);
    };
    EdicionOddComponent = __decorate([
        core_1.Component({
            selector: 'edicionodd',
            template: require('./edicionodd.component.html')
        }), 
        __metadata('design:paramtypes', [odd_service_1.ODDService, ng_bootstrap_1.NgbModal])
    ], EdicionOddComponent);
    return EdicionOddComponent;
}());
exports.EdicionOddComponent = EdicionOddComponent;
//# sourceMappingURL=edicionodd.component.js.map