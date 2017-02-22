import { Component } from '@angular/core';

import { Persona } from '../../_services/personas/persona';
import { ODD } from '../../_services/odd/odd';

import { ListaSeleccionablePersonasComponent } from '../_shared/listaseleccionable.component';

import { PersonasService } from '../../_services/personas/personas.service';
import { ODDService } from '../../_services/odd/odd.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'bajapersona',
    template: require('./bajapersona.component.html')
})
export class BajaPersonaComponent {
    
    personaSeleccionada: Persona = new Persona();
    listadoOdd: ODD[];
    mostrarDatos: boolean = false;

    constructor(private personasService: PersonasService, private oddService: ODDService,
    private modalService: NgbModal) {
        this.listadoOdd = oddService.getODDs();
    }

    getdatosPersonaSeleccionada(personaSeleccionada: Persona, content) {
        this.personaSeleccionada = personaSeleccionada;
        //this.mostrarDatos = true;
        this.modalService.open(content);
    }

    open(content) {
        this.modalService.open(content);
  }
}