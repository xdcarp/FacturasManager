import { Component } from '@angular/core';

import { Persona } from '../../_services/personas/persona';
import { ODD } from '../../_services/odd/odd';

import { ListaSeleccionablePersonasComponent } from '../_shared/listaseleccionable.component';

import { PersonasService } from '../../_services/personas/personas.service';
import { ODDService } from '../../_services/odd/odd.service';

@Component({
    selector: 'bajapersona',
    template: require('./bajapersona.component.html')
})
export class BajaPersonaComponent {
    
    personaSeleccionada: Persona;
    listadoOdd: ODD[];
    mostrarDatos: boolean = false;

    constructor(private personasService: PersonasService, private oddService: ODDService) {
        this.listadoOdd = oddService.getODDs();
    }

    getdatosPersonaSeleccionada(personaSeleccionada: Persona) {
        this.personaSeleccionada = personaSeleccionada;
        this.mostrarDatos = true;
    }
}