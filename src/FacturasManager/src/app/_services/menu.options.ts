export class MenuPrincipal {
    static MenuPrincipalOpts: { idMenu: number, name: string, opciones: string[] }[] =
    [{ "idMenu": 1, "name": 'Personas', "opciones": ['Agregar', 'Eliminar', 'Modificar', 'Listar'] },
      { "idMenu": 2, "name": 'ODD (Objetos de Deseo)', "opciones": ['Agregar', 'Eliminar', 'Modificar', 'Listar'] },
      { "idMenu": 3, "name": 'Plan', "opciones": ['Ver Plan', 'Modificar Plan'] }
    ];
}