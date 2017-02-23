import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { Persona } from '../_services/personas/persona';
import { ODD } from '../_services/odd/odd';

import { PersonasService } from '../_services/personas/personas.service';
import { ODDService } from '../_services/odd/odd.service';

import { ListaOddComponent } from '../odd/lista/listaodd.component';
import { AltaOddComponent } from '../odd/alta/altaodd.component';
import { EdicionOddComponent } from '../odd/edicion/edicionodd.component';
import { BajaOddComponent } from '../odd/baja/bajaodd.component';

@NgModule({
    declarations: [
        ListaOddComponent,
        AltaOddComponent,
        BajaOddComponent,
        EdicionOddComponent
        ],
    imports: [
        BrowserModule,
        CommonModule,        
        NgbModule,
        SharedModule
    ],
    exports: [                
    ],
    providers: [
        PersonasService,
        ODDService]
})
export class ODDModule { }