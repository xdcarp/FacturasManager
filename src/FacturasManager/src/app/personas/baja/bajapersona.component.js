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
var persona_1 = require('../../_services/personas/persona');
var personas_service_1 = require('../../_services/personas/personas.service');
var odd_service_1 = require('../../_services/odd/odd.service');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var BajaPersonaComponent = (function () {
    function BajaPersonaComponent(personasService, oddService, modalService) {
        var _this = this;
        this.personasService = personasService;
        this.oddService = oddService;
        this.modalService = modalService;
        this.titulo = 'Eliminar Persona';
        this.personaSeleccionada = new persona_1.Persona();
        //this.listadoOdd = oddService.getODDs();
        oddService
            .getODDs()
            .subscribe(function (data) { return _this.listadoOdd = data; }, function (error) { return console.log(error); }, function () { return console.log("getODDs() complete from constructor"); });
    }
    BajaPersonaComponent.prototype.getdatosPersonaSeleccionada = function (personaSeleccionada, content) {
        this.personaSeleccionada = personaSeleccionada;
        this.modalService.open(content);
    };
    BajaPersonaComponent = __decorate([
        core_1.Component({
            selector: 'bajapersona',
            template: require('./bajapersona.component.html')
        }), 
        __metadata('design:paramtypes', [personas_service_1.PersonasService, odd_service_1.ODDService, ng_bootstrap_1.NgbModal])
    ], BajaPersonaComponent);
    return BajaPersonaComponent;
}());
exports.BajaPersonaComponent = BajaPersonaComponent;
//# sourceMappingURL=bajapersona.component.js.map