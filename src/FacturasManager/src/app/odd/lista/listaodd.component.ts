import { Component } from '@angular/core';

import { ODDService } from '../../_services/odd/odd.service';
import { ODD } from '../../_services/odd/odd';

@Component({
    selector: 'listaodd',
    template: require('./listaodd.component.html')
})
export class ListaOddComponent {
    
    listaOdds: ODD[] = [];
    oddByIdTest: ODD = new ODD();

    constructor(private oddService: ODDService) { 
        //this.listaOdds = oddService.getODDs();
        oddService
            .getODDs()
            .subscribe((data: ODD[]) => this.listaOdds = data,
            error => console.log(error),
            () => console.log("getODDs() complete from constructor"));
        
        oddService
            .getOddById(1)
            .subscribe((data: ODD) => this.oddByIdTest = data,
            error => console.log(error),
            () => console.log("getODDs() complete from constructor"));
    }
}