import { Component, Input } from '@angular/core';

import { MenuesService } from '../_services/menu.service';

@Component({
    selector: 'sidebarNav',
    template: require('./sidebarNav.component.html')
})
export class SidebarNav  {   
    @Input('opciones')
    opciones: string[];
    esLaOpcionActiva: number;
    
    constructor(private menuService: MenuesService) {
    }   
    
    setOpcionSeleccionada(nuevoValor: number) { 
        if(this.esLaOpcionActiva === nuevoValor){
            this.esLaOpcionActiva = 0;
        }
        else{
            this.esLaOpcionActiva = nuevoValor;
        }
    }
}