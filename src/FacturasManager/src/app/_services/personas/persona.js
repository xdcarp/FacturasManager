"use strict";
/**
 * Persona
 */
var Persona = (function () {
    function Persona(id, elnombre, quieretraerODD, eltelefono) {
        this.id = id;
        this.nombreyapellido = elnombre;
        this.traeODD = quieretraerODD;
        this.telefono = eltelefono;
    }
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map