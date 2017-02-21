import { Component, Input, Injectable, EventEmitter, trigger, state, transition, animate, style } from '@angular/core';
import { Router } from '@angular/router';

import { MenuesService } from '../_services/menu.service';
import { BackdropService } from "../shared/backdrop/backdrop.component";

@Injectable()
export class SidebarNavService {
    constructor(private backdropService: BackdropService) {
        this.Seleccion = new EventEmitter<{ opciones: string[], rutas: string[] }>();
        this.isVisible = false;
    }
    Seleccion: EventEmitter<{ opciones: string[], rutas: string[] }>;
    isVisible: boolean;
    public show() {
        this.isVisible = true;
        // this.Seleccion.emit(this.isVisible);
        this.backdropService.show();
    }
    public hide() {
        this.isVisible = false;
        // this.Seleccion.emit(this.isVisible);
        this.backdropService.show();
    }
    public newConfig(opciones: string[], rutas: string[]) {
        if (!this.isVisible) {
            this.show();
        }
        this.Seleccion.emit({ opciones: opciones, rutas: rutas });
    }
}

@Component({
    selector: 'sidebarNav',
    template: require('./sidebarNav.component.html')
    // ,
    // animations: [
    //     trigger('slideInOut', [
    //         state('in', style({
    //             transform: 'translate3d(-100%, 0, 0)'
    //         })),
    //         state('out', style({
    //             transform: 'translate3d(0, 0, 0)'
    //         })),
    //         transition('in => out', animate('400ms ease-in-out')),
    //         transition('out => in', animate('400ms ease-in-out'))
    //     ]),
    // ]
})
export class SidebarNav {
    opciones: string[];
    rutas: string[];

    isVisible: boolean;

    esLaOpcionActiva: number;
    menuState: string = 'out';

    constructor(private sidebarNavService: SidebarNavService, private menuService: MenuesService,
        private router: Router, private backdropService: BackdropService) {
        // this.isVisible = false;
        // this.opciones = [];
        // this.rutas = [];
        // this.sidebarNavService.Seleccion.subscribe(obj => {
        //     this.opciones = obj.opciones;
        //     this.rutas = obj.rutas;
        // });

        // this.backdropService.Toggle.subscribe(isVisible => {
        //     console.log(isVisible);
        //     this.menuState = isVisible ? 'out' : "in";
        // });
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