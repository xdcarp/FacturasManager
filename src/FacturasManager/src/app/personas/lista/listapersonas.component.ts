import { Component } from '@angular/core';

import { PersonasService } from '../../_services/personas/personas.service';

@Component({
    selector: 'listapersonas',
    template: require('./listapersonas.component.html')
})
export class ListaPersonasComponent {
    
    listaPersonas: any[];
    constructor(private servicioPersonas: PersonasService) { 
        this.listaPersonas = servicioPersonas.getPersonas();
    }

    
}