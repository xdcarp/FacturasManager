import { Component } from '@angular/core';

import { ODDService } from '../../_services/odd/odd.service';
import { ODD } from '../../_services/odd/odd';

@Component({
    selector: 'modificarplan',
    template: require('./modificarplan.component.html')
})
export class ModificarPlanComponent {
    
    listaOdds: ODD[] = [];

    constructor(private oddService: ODDService) { 
        this.listaOdds = oddService.getODDs();
    }
}