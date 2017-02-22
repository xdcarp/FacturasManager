import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { Persona } from '../_services/personas/persona';
import { ODD } from '../_services/odd/odd';

import { PersonasService } from '../_services/personas/personas.service';
import { ODDService } from '../_services/odd/odd.service';

import { ListaSeleccionablePersonasComponent } from './_shared/listaseleccionable.component';
import { ListaPersonasComponent } from '../personas/lista/listapersonas.component';
import { AltaPersonaComponent } from '../personas/alta/altapersona.component';
import { EdicionPersonaComponent } from '../personas/edicion/edicionpersona.component';
import { BajaPersonaComponent } from '../personas/baja/bajapersona.component';

@NgModule({
    declarations: [
        ListaSeleccionablePersonasComponent,
        ListaPersonasComponent,
        AltaPersonaComponent,
        EdicionPersonaComponent,
        BajaPersonaComponent
        ],
    imports: [
        BrowserModule,
        CommonModule,        
        NgbModule
    ],
    exports: [                
    ],
    providers: [
        PersonasService,
        ODDService]
})
export class PersonaModule { }