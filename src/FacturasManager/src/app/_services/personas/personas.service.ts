import { Injectable } from '@angular/core';

@Injectable()
export class PersonasService {
    
    public personas: Persona[] = [
        new Persona('Gaby Gutierrez', true, '112223334'),
        new Persona('Dario Furman', false, '116666552'),
        new Persona('Gonzalo de la Vega', true, '116666552'),
        new Persona('Federico Palumbo', true, '116666552'),
        new Persona('Rodrigo Pereira', false, '116666552'),
    ];
    
    getPersonas() {
        return this.personas;
     }
}

/**
 * Persona
 */
class Persona {
    public nombreyapellido: string;
    public traeODD: boolean;
    public telefono: string;

    constructor(elnombre: string, quieretraerODD: boolean, eltelefono: string) { 
        this.nombreyapellido = elnombre;
        this.traeODD = quieretraerODD;
        this.telefono = eltelefono;
    }
}