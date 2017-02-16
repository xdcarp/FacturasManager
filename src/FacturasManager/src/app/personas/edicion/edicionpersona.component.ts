import { Component } from '@angular/core';

import { Persona } from '../../_services/personas/persona';
import { ODD } from '../../_services/odd/odd';

import { ListaSeleccionablePersonasComponent } from '../_shared/listaseleccionable.component';

import { PersonasService } from '../../_services/personas/personas.service';
import { ODDService } from '../../_services/odd/odd.service';

@Component({
    selector: 'edicionpersona',
    template: require('./edicionpersona.component.html')
})
export class EdicionPersonaComponent {
    
    personaSeleccionada: Persona;
    listadoOdd: ODD[];

    constructor(private personasService: PersonasService, private oddService: ODDService) {
        this.listadoOdd = oddService.getODDs();
    }

    mostrarpersonaseleccionada(personaSeleccionada: Persona) {
        this.personaSeleccionada = personaSeleccionada;
    }
}