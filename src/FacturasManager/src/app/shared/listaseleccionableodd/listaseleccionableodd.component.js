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
var ListaSeleccionableOddComponent = (function () {
    function ListaSeleccionableOddComponent(servicioOdd) {
        var _this = this;
        this.servicioOdd = servicioOdd;
        this.onSelected = new core_1.EventEmitter();
        //this.listaOdd = servicioOdd.getODDs();
        servicioOdd
            .getODDs()
            .subscribe(function (data) { return _this.listaOdd = data; }, function (error) { return console.log(error); }, function () { return console.log("getODDs() complete from constructor"); });
    }
    ListaSeleccionableOddComponent.prototype.mostrarseleccionada = function (odd) {
        this.onSelected.emit(odd);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListaSeleccionableOddComponent.prototype, "titulo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListaSeleccionableOddComponent.prototype, "onSelected", void 0);
    ListaSeleccionableOddComponent = __decorate([
        core_1.Component({
            selector: 'listaseleccionablepersonasodd',
            template: require('./listaseleccionableodd.component.html')
        }), 
        __metadata('design:paramtypes', [odd_service_1.ODDService])
    ], ListaSeleccionableOddComponent);
    return ListaSeleccionableOddComponent;
}());
exports.ListaSeleccionableOddComponent = ListaSeleccionableOddComponent;
//# sourceMappingURL=listaseleccionableodd.component.js.map