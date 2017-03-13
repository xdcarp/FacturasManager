import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ODDService } from '../../_services/odd/odd.service';
import { ODD } from '../../_services/odd/odd';

import { PersonasService } from '../../_services/personas/personas.service';
import { Persona } from '../../_services/personas/persona';

@Component({
    selector: 'verplan',
    template: require('./verplan.component.html')
})
export class VerPlanComponent {   
   
    listaOdds: ODD[] = [];
    listadoPersonas: Persona[] = [];
    listadoPersonasQueDejanDeTraer: Persona[] = [];
    mostrarBotones: boolean = false;

    constructor(private oddService: ODDService, private personaService: PersonasService) { 
        //this.listaOdds = oddService.getODDs();
        oddService
            .getODDs()
            .subscribe((data: ODD[]) => this.listaOdds = data,
            error => console.log(error),
            () => console.log("getODDs() complete from constructor"));
        this.listadoPersonas = personaService.getPersonasByLoQueTraen();        
    }    
}