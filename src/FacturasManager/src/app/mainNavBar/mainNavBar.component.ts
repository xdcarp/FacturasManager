import { Component, OnInit, trigger, state, transition, animate, style } from '@angular/core';

import { MenuesService } from '../_services/menu.service';

@Component({
    selector: 'mainnavbar',
    template: require('./mainNavBar.component.html'),
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
export class MainNavBar implements OnInit {
    
    menuState: string;
    public menuPrincipalOpts;
    public menuCrudOpts;
    public menuPlanOpts;
    public opcionesDeSubMenu;

    constructor(private menuService: MenuesService) { 
        this.menuPrincipalOpts = this.menuService.getOpcionesMenuPrincipal();
    }

    ngOnInit() {
        this.menuState = 'in';        
    }

    opciones: string[];

    toggleMenu(itemSeleccionado) {
        this.opciones = itemSeleccionado.opciones;
        //this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

    esconderBarra(event) {
        if (this.menuPrincipalOpts.find(opcion => opcion.name == event.innerText) ||
        this.opciones.find(opt => opt == event.innerText)){
        //if (event.innerText == 'Personas' || event.innerText == 'ODD (Objetos de Deseo)' || event.innerText == 'Plan') {
            this.menuState = 'out';
        }
        else {
            this.menuState = 'in';
         }
            
     }
}