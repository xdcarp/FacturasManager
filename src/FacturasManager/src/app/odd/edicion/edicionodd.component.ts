import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ODD } from '../../_services/odd/odd';

import { ListaSeleccionableOddComponent } from '../../shared/listaseleccionableodd/listaseleccionableodd.component';

import { ODDService } from '../../_services/odd/odd.service';

@Component({
    selector: 'edicionodd',
    template: require('./edicionodd.component.html')
})
export class EdicionOddComponent {
    
    titulo: string = 'Editar Datos de un Objeto de Deseo';
    oddSeleccionado: ODD;
    listadoOdd: ODD[];

    constructor(private oddService: ODDService,
    private modalService: NgbModal) {
        this.oddSeleccionado = new ODD();
        oddService
            .getODDs()
            .subscribe((data: ODD[]) => this.listadoOdd = data,
            error => console.log(error),
            () => console.log("getODDs() complete from constructor"));;
    }

    mostraroddSeleccionado(oddSeleccionado: ODD, content) {
        this.oddSeleccionado = oddSeleccionado;
        this.modalService.open(content);
    }
}