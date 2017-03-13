import { Component } from '@angular/core';

import { ListaSeleccionablePersonasComponent } from '../../shared/listaseleccionable/listaseleccionable.component';

import { Persona } from '../../_services/personas/persona';
import { ODD } from '../../_services/odd/odd';

import { PersonasService } from '../../_services/personas/personas.service';
import { ODDService } from '../../_services/odd/odd.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'bajapersona',
    template: require('./bajapersona.component.html')
})
export class BajaPersonaComponent {
    
    titulo: string = 'Eliminar Persona';
    personaSeleccionada: Persona = new Persona();
    listadoOdd: ODD[];    

    constructor(private personasService: PersonasService, private oddService: ODDService,
    private modalService: NgbModal) {
        //this.listadoOdd = oddService.getODDs();
        oddService
            .getODDs()
            .subscribe((data: ODD[]) => this.listadoOdd = data,
            error => console.log(error),
            () => console.log("getODDs() complete from constructor"));
    }

    getdatosPersonaSeleccionada(personaSeleccionada: Persona, content) {
        this.personaSeleccionada = personaSeleccionada;
        this.modalService.open(content);
    }
  
}