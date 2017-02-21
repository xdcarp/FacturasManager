import { Component, OnInit, trigger, state, transition, animate, style } from '@angular/core';

import { MenuesService } from '../_services/menu.service';

import { BackdropService } from "../shared/backdrop/backdrop.component";

import { SidebarNavService } from '../sidebarnav/sidebarnav.component';

@Component({
    selector: 'mainnavbar',
    template: require('./mainNavBar.component.html')
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
export class MainNavBar implements OnInit {

    menuState: string;
    public menuPrincipalOpts;
    public menuCrudOpts;
    public menuPlanOpts;
    public opcionesDeSubMenu;

    constructor(private menuService: MenuesService,
        private backdropService: BackdropService,
    private sidebarNavService: SidebarNavService) {
        this.menuPrincipalOpts = this.menuService.getOpcionesMenuPrincipal();
        //this.opciones = this.menuPrincipalOpts.find(x => x.idMenu).opciones;
        // this.isVisible = false;
        // backdropService.Toggle.subscribe(isVisible => {
        //     console.log(isVisible);
        //     this.menuState = isVisible ? 'out' : "in";
        // });
    }

    ngOnInit() {
        this.menuState = 'in';
    }
    isVisible: boolean;
    // opciones: string[];
    // rutas: string[];

    showSideBar(itemSeleccionado) {

        this.sidebarNavService.newConfig(itemSeleccionado.opciones, itemSeleccionado.rutas);
        // this.opciones = itemSeleccionado.opciones;
        // this.rutas = itemSeleccionado.rutas;
        //this.backdropService.show();
    }

    esconderBarra(event) {
        /*   if (this.menuPrincipalOpts.find(opcion => opcion.name == event.innerText) ||
           this.opciones.find(opt => opt == event.innerText)){
               this.menuState = 'out';
           }
           else {
               this.menuState = 'in';
           }*/

    }
}