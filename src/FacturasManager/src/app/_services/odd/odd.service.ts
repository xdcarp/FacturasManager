import { Injectable } from '@angular/core';

import { ODD } from './odd';

@Injectable()
export class ODDService {
    objetosDeDeseo: ODD[] = [
        new ODD(1, 'Facturas'),
        new ODD(2, 'Yerba'),
        new ODD(3, 'Café')
    ];

    getODDs() { 
        return this.objetosDeDeseo;
    }
}