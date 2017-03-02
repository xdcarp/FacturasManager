import { Injectable } from '@angular/core';

import { Persona } from './persona';
import { ODD } from '../odd/odd';
import { ODDService } from '../odd/odd.service';

@Injectable()
export class PersonasService {
    
    constructor(private oddService: ODDService) { }
    
    public odds1: ODD[] = [
        new ODD(1, 'Facturas'),
        new ODD(2, 'Yerba'),
        new ODD(3, 'Café')        
    ];
    
    public odds2: ODD[] = [
        new ODD(1, 'Facturas'),
        new ODD(2, 'Yerba')       
    ];

    public odds3: ODD[] = [
        new ODD(1, 'Facturas')   
    ];
    
    public personas: Persona[] = [
        new Persona(1, 'Gaby Gutierrez', true, '112223334', this.odds1),
        new Persona(2, 'Dario Furman', false, '116667652', this.odds1),
        new Persona(3, 'Gonzalo de la Vega', true, '116669052', this.odds2),
        new Persona(4, 'Federico Palumbo', true, '116446552', this.odds2),
        new Persona(5, 'Rodrigo Pereira', false, '116678552', this.odds3),
    ];
    
    getPersonas() {
        return this.personas;
    }

    getPersonaById(idPersona) { }

    getPersonaByNombreyApellido(nombreyapellido) { }

    getPersonasByLoQueTraen(oddAFiltrar?) {
        //TODO: cambiar por la consulta al servicio que corresponda
        return this.personas;
     }
}