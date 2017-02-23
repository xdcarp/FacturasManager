import { Component } from '@angular/core';

import { ODDService } from '../../_services/odd/odd.service';
import { ODD } from '../../_services/odd/odd';

@Component({
    selector: 'altaodd',
    template: require('./altaodd.component.html')
})
export class AltaOddComponent {


    constructor(private oddService: ODDService) {

     }

    addOdd() { 
        //TODO: llamar al servicio de odd para el alta
    };

}