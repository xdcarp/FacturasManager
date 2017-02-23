import { ODD } from '../odd/odd';
/**
 * Persona
 */
export class Persona {
    public id: number;
    public nombreyapellido: string;
    public traeODD: boolean;
    public telefono: string;
    public losOddQueTrae: ODD[];

    constructor(id?: number, elnombre?: string, quieretraerODD?: boolean, eltelefono?: string,
    losOddQueTrae?: ODD[]) { 
        this.id = id;
        this.nombreyapellido = elnombre;
        this.traeODD = quieretraerODD;
        this.telefono = eltelefono;
        this.losOddQueTrae = losOddQueTrae;
    }
}