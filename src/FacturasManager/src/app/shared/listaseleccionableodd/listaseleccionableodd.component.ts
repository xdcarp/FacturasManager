import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ODD } from '../../_services/odd/odd';
import { ODDService } from '../../_services/odd/odd.service';

@Component({
    selector: 'listaseleccionablepersonasodd',
    template: require('./listaseleccionableodd.component.html')
})
export class ListaSeleccionableOddComponent {
    
    @Input() titulo: string;
    @Output() onSelected = new EventEmitter<ODD>();

    listaOdd: ODD[];

    constructor(private servicioOdd: ODDService) { 
        //this.listaOdd = servicioOdd.getODDs();
        servicioOdd
            .getODDs()
            .subscribe((data: ODD[]) => this.listaOdd = data,
            error => console.log(error),
            () => console.log("getODDs() complete from constructor"));
    }

    mostrarseleccionada(odd: ODD) { 
        this.onSelected.emit(odd);
    }
}