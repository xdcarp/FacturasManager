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
var backdrop_service_1 = require('../../_services/backdrop/backdrop.service');
var sidebarNav_service_1 = require('../../_services/sidebarNav/sidebarNav.service');
var BackdropComponent = (function () {
    function BackdropComponent(backdropService, sidebarNavService) {
        var _this = this;
        this.backdropService = backdropService;
        this.sidebarNavService = sidebarNavService;
        this.isVisible = false;
        this.backdropService.Toggle.subscribe(function (isVisible) { return _this.isVisible = isVisible; });
        this.sidebarNavService.VisibilityChanged.subscribe();
    }
    BackdropComponent.prototype.onClick = function () {
        this.backdropService.hide();
    };
    BackdropComponent = __decorate([
        core_1.Component({
            selector: 'backdrop',
            template: require('./backdrop.component.html')
        }), 
        __metadata('design:paramtypes', [backdrop_service_1.BackdropService, sidebarNav_service_1.SidebarNavService])
    ], BackdropComponent);
    return BackdropComponent;
}());
exports.BackdropComponent = BackdropComponent;
//# sourceMappingURL=backdrop.component.js.map