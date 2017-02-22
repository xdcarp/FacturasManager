import { Component, Input, Injectable, EventEmitter, trigger, state, transition, animate, style } from '@angular/core';
import { Router } from '@angular/router';

import { MenuesService } from '../_services/menu.service';
import { BackdropService } from "../_services/backdrop/backdrop.service";
import { SidebarNavService } from "../_services/sidebarNav/sidebarNav.service";

@Component({
    selector: 'sidebarNav',
    template: require('./sidebarNav.component.html'),
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(-100%, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})
export class SidebarNav {
    opciones: string[] = [];
    rutas: string[] = [];

    esLaOpcionActiva: number;
    menuState: string = 'in';

    constructor(private sidebarNavService: SidebarNavService, private menuService: MenuesService,
        private router: Router, private backdropService: BackdropService) {
        
        this.sidebarNavService.Seleccion.subscribe(obj => {
            this.opciones = obj.opciones;
            this.rutas = obj.rutas;
        });

        this.sidebarNavService.VisibilityChanged.subscribe(isVisible => {            
            this.menuState = isVisible ? 'out' : "in";
            if (isVisible) { 
                this.backdropService.show();
            }
            else { 
                this.backdropService.hide();
            }
        });

        this.backdropService.Toggle.subscribe(isVisible => { 
            if (!isVisible)
               this.menuState = 'in';  
        });
    }

    setOpcionSeleccionada(nuevoValor: number, idx: number) {
        if (this.esLaOpcionActiva === nuevoValor) {
            this.esLaOpcionActiva = 0;
        }
        else {
            this.esLaOpcionActiva = nuevoValor;
        }

        this.router.navigate([this.rutas[idx]]);
    }
}