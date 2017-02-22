import { Component, trigger, state, transition, animate, style } from '@angular/core';

import { MenuesService } from '../_services/menu.service';

import { SidebarNavService } from '../_services/sidebarNav/sidebarNav.service';

@Component({
    selector: 'mainnavbar',
    template: require('./mainNavBar.component.html')    
})
export class MainNavBar {

    public menuPrincipalOpts;

    constructor(private menuService: MenuesService,
        private sidebarNavService: SidebarNavService) {
        this.menuPrincipalOpts = this.menuService.getOpcionesMenuPrincipal();        
    }       

    showSideBar(itemSeleccionado) {
        this.sidebarNavService.newConfig(itemSeleccionado.opciones, itemSeleccionado.rutas);        
    }    
}