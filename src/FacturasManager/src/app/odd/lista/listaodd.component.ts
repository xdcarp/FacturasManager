import { Component } from '@angular/core';

import { ODDService } from '../../_services/odd/odd.service';
import { ODD } from '../../_services/odd/odd';

@Component({
    selector: 'listaodd',
    template: require('./listaodd.component.html')
})
export class ListaOddComponent {
    
    listaOdds: ODD[] = [];

    constructor(private oddService: ODDService) { 
        this.listaOdds = oddService.getODDs();
    }
}