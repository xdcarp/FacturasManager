import { Injectable } from '@angular/core';

import { Persona } from './persona';

@Injectable()
export class PersonasService {
    
    public personas: Persona[] = [
        new Persona(1, 'Gaby Gutierrez', true, '112223334'),
        new Persona(2, 'Dario Furman', false, '116666552'),
        new Persona(3, 'Gonzalo de la Vega', true, '116666552'),
        new Persona(4, 'Federico Palumbo', true, '116666552'),
        new Persona(5, 'Rodrigo Pereira', false, '116666552'),
    ];
    
    getPersonas() {
        return this.personas;
     }
}