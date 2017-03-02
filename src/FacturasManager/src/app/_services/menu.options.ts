export class MenuPrincipal {
    static MenuPrincipalOpts: { idMenu: number, name: string, opciones: string[], rutas: string[] }[] =
    [
      {
        "idMenu": 1, "name": 'Personas', "opciones": ['Agregar', 'Eliminar', 'Modificar', 'Listar'],
        "rutas": ['/alta-persona', '/baja-persona', '/editar-persona', '/listado-personas']
      },
      {
        "idMenu": 2, "name": 'ODD (Objetos de Deseo)', "opciones": ['Agregar', 'Eliminar', 'Modificar', 'Listar'],
        "rutas": ['/alta-odd', '/baja-odd', '/editar-odd', '/listado-odd']
      },
      {
        "idMenu": 3, "name": 'Plan', "opciones": ['Ver Plan', 'Modificar Plan'],
        "rutas": ['/ver-plan', '/modificar-plan']
      }
    ];
}