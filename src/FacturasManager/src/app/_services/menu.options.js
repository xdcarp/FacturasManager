"use strict";
var MenuPrincipal = (function () {
    function MenuPrincipal() {
    }
    MenuPrincipal.MenuPrincipalOpts = [{ "idMenu": 1, "name": 'Personas', "opciones": ['Agregar', 'Eliminar', 'Modificar', 'Listar'] },
        { "idMenu": 2, "name": 'ODD (Objetos de Deseo)', "opciones": ['Agregar', 'Eliminar', 'Modificar', 'Listar'] },
        { "idMenu": 3, "name": 'Plan', "opciones": ['Ver Plan', 'Modificar Plan'] }
    ];
    return MenuPrincipal;
}());
exports.MenuPrincipal = MenuPrincipal;
//# sourceMappingURL=menu.options.js.map