import { Component, Output, EventEmitter } from '@angular/core';

import { ODD } from '../../_services/odd/odd';
import { ODDService } from '../../_services/odd/odd.service';

@Component({
    selector: 'listaseleccionablepersonasodd',
    template: require('./listaseleccionableodd.component.html')
})
export class ListaSeleccionableOddComponent {
    
    @Output() onSelected = new EventEmitter<ODD>();

    listaOdd: ODD[];

    constructor(private servicioOdd: ODDService) { 
        this.listaOdd = servicioOdd.getODDs();
    }

    mostrarseleccionada(odd: ODD) { 
        this.onSelected.emit(odd);
    }
}