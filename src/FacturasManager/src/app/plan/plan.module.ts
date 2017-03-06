import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';

import { SharedModule } from '../shared/shared.module';

import { Persona } from '../_services/personas/persona';
import { ODD } from '../_services/odd/odd';

import { PersonasService } from '../_services/personas/personas.service';
import { ODDService } from '../_services/odd/odd.service';

import { VerPlanComponent } from './verplan/verplan.component';

@NgModule({
    declarations: [
        VerPlanComponent
        ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,        
        NgbModule,
        SharedModule,
        DndModule
    ],
    exports: [   
        DndModule
    ],
    providers: [
        PersonasService,
        ODDService
    ]
})
export class PlanModule { }