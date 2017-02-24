import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ODDService } from '../../_services/odd/odd.service';
import { ODD } from '../../_services/odd/odd';

@Component({
    selector: 'bajaodd',
    template: require('./bajaodd.component.html')
})
export class BajaOddComponent {
    
    titulo: string = 'Eliminar Objeto de Deseo';
    oddSeleccionado: ODD = new ODD();

    constructor(private oddService: ODDService, private modalService: NgbModal) {}

    getdatosOddSeleccionada(odd: ODD, content) { 
        this.oddSeleccionado = odd;
        this.modalService.open(content);
    }
}