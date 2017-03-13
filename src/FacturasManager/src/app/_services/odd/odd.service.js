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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var configuration_1 = require('../../shared/configuration');
var odd_1 = require('./odd');
var ODDService = (function () {
    function ODDService(_http, configuration) {
        var _this = this;
        this._http = _http;
        this.configuration = configuration;
        /*Urls Api */
        this.getByIdUrl = '/GetById/';
        this.objetosDeDeseo = [
            new odd_1.ODD(1, 'Facturas'),
            new odd_1.ODD(2, 'Yerba'),
            new odd_1.ODD(3, 'Café')
        ];
        this.getODDs = function () {
            return _this._http.get(_this.configuration.ServerWithApiUrl)
                .map(function (data) { return data.json(); });
        };
        this.getOddById = function (id) {
            return _this._http.get(_this.configuration.ServerWithApiUrl + _this.getByIdUrl + id)
                .map(function (data) { return data.json(); });
        };
    }
    ODDService.prototype.getODDsByPersona = function (idPersona) {
        //TODO: servicio que trae los odds de una persona en particular
    };
    ODDService.prototype.addODD = function (nombre) {
        //TODO: servicio que da de alta al odd
    };
    ODDService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, configuration_1.Configuration])
    ], ODDService);
    return ODDService;
}());
exports.ODDService = ODDService;
//# sourceMappingURL=odd.service.js.map