import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Persona } from '../../_services/personas/persona';
import { ODD } from '../../_services/odd/odd';

import { ListaSeleccionablePersonasComponent } from '../../shared/listaseleccionable/listaseleccionable.component';

import { PersonasService } from '../../_services/personas/personas.service';
import { ODDService } from '../../_services/odd/odd.service';

@Component({
    selector: 'edicionpersona',
    template: require('./edicionpersona.component.html')
})
export class EdicionPersonaComponent {
    
    personaSeleccionada: Persona;
    listadoOdd: ODD[];

    constructor(private personasService: PersonasService, private oddService: ODDService,
    private modalService: NgbModal) {
        this.listadoOdd = oddService.getODDs();
    }

    mostrarpersonaseleccionada(personaSeleccionada: Persona, content) {
        this.personaSeleccionada = personaSeleccionada;
        this.modalService.open(content);
    }
}