import { Component, Input } from '@angular/core';

import { MenuesService } from '../_services/menu.service';

@Component({
    selector: 'sidebarNav',
    template: require('./sidebarNav.component.html')
})
export class SidebarNav  {   
    @Input('opciones')
    opciones: string[];
    esLaOpcionActiva: boolean = false;
    
    constructor(private menuService: MenuesService) {
    }   
    
    setOpcionSeleccionada() { 
        this.esLaOpcionActiva = true;
    }
}