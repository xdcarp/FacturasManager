import { Injectable } from '@angular/core';

import * as OpcionesMenu from './menu.options';

@Injectable()
export class MenuesService {

    constructor() { }

    getOpcionesMenuPrincipal() { 
        return OpcionesMenu.MenuPrincipal.MenuPrincipalOpts;
    }    
}