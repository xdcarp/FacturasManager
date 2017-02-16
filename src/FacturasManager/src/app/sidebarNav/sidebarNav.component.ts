import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuesService } from '../_services/menu.service';

@Component({
    selector: 'sidebarNav',
    template: require('./sidebarNav.component.html')
})
export class SidebarNav  {   
    @Input('opciones')
    opciones: string[];
    @Input('rutas')
    rutas: string[];

    esLaOpcionActiva: number;
    
    constructor(private menuService: MenuesService, private router: Router) {
    }   
    
    setOpcionSeleccionada(nuevoValor: number, idx: number) { 
        if(this.esLaOpcionActiva === nuevoValor){
            this.esLaOpcionActiva = 0;
        }
        else{
            this.esLaOpcionActiva = nuevoValor;
        }
        
        this.router.navigate([this.rutas[idx]]);
    }
}