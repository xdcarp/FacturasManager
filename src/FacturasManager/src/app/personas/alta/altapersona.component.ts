import { Component } from '@angular/core';

import { ODD } from '../../_services/odd/odd';

import { PersonasService } from '../../_services/personas/personas.service';
import { ODDService } from '../../_services/odd/odd.service';

@Component({
    selector: 'altapersona',
    template: require('./altapersona.component.html')
})
export class AltaPersonaComponent  {

    public listadoOdd: ODD[];

    constructor(private personasService: PersonasService, private oddService: ODDService) {
       this.listadoOdd = oddService.getODDs();
     }
    
    addNewPersona() {
        //TODO: llamar al servicio de personas y darla de alta
     }
}