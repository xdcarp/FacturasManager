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
var personas_service_1 = require('../../_services/personas/personas.service');
var ListaSeleccionablePersonasComponent = (function () {
    function ListaSeleccionablePersonasComponent(servicioPersonas) {
        this.servicioPersonas = servicioPersonas;
        this.onSelected = new core_1.EventEmitter();
        this.listaPersonas = servicioPersonas.getPersonas();
    }
    ListaSeleccionablePersonasComponent.prototype.mostrarseleccionada = function (persona) {
        this.onSelected.emit(persona);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListaSeleccionablePersonasComponent.prototype, "onSelected", void 0);
    ListaSeleccionablePersonasComponent = __decorate([
        core_1.Component({
            selector: 'listaseleccionablepersonas',
            template: require('./listaseleccionable.component.html')
        }), 
        __metadata('design:paramtypes', [personas_service_1.PersonasService])
    ], ListaSeleccionablePersonasComponent);
    return ListaSeleccionablePersonasComponent;
}());
exports.ListaSeleccionablePersonasComponent = ListaSeleccionablePersonasComponent;
//# sourceMappingURL=listaseleccionable.component.js.map