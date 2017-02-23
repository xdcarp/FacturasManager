import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { Persona } from '../_services/personas/persona';
import { ODD } from '../_services/odd/odd';

import { PersonasService } from '../_services/personas/personas.service';
import { ODDService } from '../_services/odd/odd.service';

import { ListaPersonasComponent } from '../personas/lista/listapersonas.component';
import { AltaPersonaComponent } from '../personas/alta/altapersona.component';
import { EdicionPersonaComponent } from '../personas/edicion/edicionpersona.component';
import { BajaPersonaComponent } from '../personas/baja/bajapersona.component';

@NgModule({
    declarations: [
        ListaPersonasComponent,
        AltaPersonaComponent,
        EdicionPersonaComponent,
        BajaPersonaComponent
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
export class PersonaModule { }