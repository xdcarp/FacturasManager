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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var ng2_dnd_1 = require('ng2-dnd');
var shared_module_1 = require('../shared/shared.module');
var personas_service_1 = require('../_services/personas/personas.service');
var odd_service_1 = require('../_services/odd/odd.service');
var verplan_component_1 = require('./verplan/verplan.component');
var PlanModule = (function () {
    function PlanModule() {
    }
    PlanModule = __decorate([
        core_1.NgModule({
            declarations: [
                verplan_component_1.VerPlanComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule,
                shared_module_1.SharedModule,
                ng2_dnd_1.DndModule
            ],
            exports: [
                ng2_dnd_1.DndModule
            ],
            providers: [
                personas_service_1.PersonasService,
                odd_service_1.ODDService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PlanModule);
    return PlanModule;
}());
exports.PlanModule = PlanModule;
//# sourceMappingURL=plan.module.js.map