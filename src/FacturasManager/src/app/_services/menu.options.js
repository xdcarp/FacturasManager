"use strict";
var MenuPrincipal = (function () {
    function MenuPrincipal() {
    }
    MenuPrincipal.MenuPrincipalOpts = [
        {
            "idMenu": 1, "name": 'Personas', "opciones": ['Agregar', 'Eliminar', 'Modificar', 'Listar'],
            "rutas": ['/alta-persona', '/baja-persona', '/editar-persona', '/listado-personas']
        },
        {
            "idMenu": 2, "name": 'ODD (Objetos de Deseo)', "opciones": ['Agregar', 'Eliminar', 'Modificar', 'Listar'],
            "rutas": ['/alta-odd', '/baja-odd', '/editar-odd', '/listado-odd']
        },
        {
            "idMenu": 3, "name": 'Plan', "opciones": ['Ver Plan'],
            "rutas": ['/ver-plan']
        }
    ];
    return MenuPrincipal;
}());
exports.MenuPrincipal = MenuPrincipal;
//# sourceMappingURL=menu.options.js.map