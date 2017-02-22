import { Component, Input, Injectable, EventEmitter, trigger, state, transition, animate, style } from '@angular/core';

import { BackdropService } from '../backdrop/backdrop.service';

@Injectable()
export class SidebarNavService {
    
    Seleccion: EventEmitter<{ opciones: string[], rutas: string[] }>;
    VisibilityChanged: EventEmitter<boolean>;
    
    constructor(private backdropService: BackdropService) {
        this.Seleccion = new EventEmitter<{ opciones: string[], rutas: string[] }>();
        this.VisibilityChanged = new EventEmitter<boolean>();
    }
    
    public show() {
        this.VisibilityChanged.emit(true);
    }

    public hide() {
        this.VisibilityChanged.emit(false);
    }

    public newConfig(opciones: string[], rutas: string[]) {
        this.Seleccion.emit({ opciones: opciones, rutas: rutas });
        this.show();             
    }
}