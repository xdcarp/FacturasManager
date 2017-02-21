import { Component, Input, Injectable, EventEmitter, trigger, state, transition, animate, style } from '@angular/core';

import { BackdropService } from '../backdrop/backdrop.service';

@Injectable()
export class SidebarNavService {
    
    Seleccion: EventEmitter<{ opciones: string[], rutas: string[] }>;
    isVisible: boolean;
    
    constructor() { //private backdropService: BackdropService
        this.Seleccion = new EventEmitter<{ opciones: string[], rutas: string[] }>();
        this.isVisible = false;
    }
    
    
    // public show() {
    //     this.isVisible = true;
    //     // this.Seleccion.emit(this.isVisible);
    //     this.backdropService.show();
    // }

    // public hide() {
    //     this.isVisible = false;
    //     // this.Seleccion.emit(this.isVisible);
    //     this.backdropService.show();
    // }

    public newConfig(opciones: string[], rutas: string[]) {
        if (!this.isVisible) {
            //this.show();
            this.isVisible = true;
        }
        this.Seleccion.emit({ opciones: opciones, rutas: rutas });
    }
}