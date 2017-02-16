/**
 * Persona
 */
export class Persona {
    public id: number;
    public nombreyapellido: string;
    public traeODD: boolean;
    public telefono: string;

    constructor(id: number, elnombre: string, quieretraerODD: boolean, eltelefono: string) { 
        this.id = id;
        this.nombreyapellido = elnombre;
        this.traeODD = quieretraerODD;
        this.telefono = eltelefono;
    }
}