import { Component, Output, EventEmitter } from '@angular/core';

import { Persona } from '../../_services/personas/persona';
import { PersonasService } from '../../_services/personas/personas.service';

@Component({
    selector: 'listaseleccionablepersonas',
    template: require('./listaseleccionable.component.html')
})
export class ListaSeleccionablePersonasComponent {
    
    @Output() onSelected = new EventEmitter<Persona>();

    listaPersonas: Persona[];

    constructor(private servicioPersonas: PersonasService) { 
        this.listaPersonas = servicioPersonas.getPersonas();
    }

    mostrarseleccionada(persona: Persona) { 
        this.onSelected.emit(persona);
    }
}