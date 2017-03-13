import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Configuration } from './configuration';

import { BackdropService } from '../_services/backdrop/backdrop.service';

import { PageNotFoundComponent } from '../shared/pageNotFound/pageNotFound.component';
import { BackdropComponent } from '../shared/backdrop/backdrop.component';
import { ListaSeleccionablePersonasComponent } from '../shared/listaseleccionable/listaseleccionable.component';
import { ListaSeleccionableOddComponent } from '../shared/listaseleccionableodd/listaseleccionableodd.component';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        BackdropComponent,
        ListaSeleccionablePersonasComponent,
        ListaSeleccionableOddComponent
    ],
    imports: [CommonModule],
    exports: [
        PageNotFoundComponent,
        BackdropComponent,
        ListaSeleccionablePersonasComponent,
        ListaSeleccionableOddComponent
    ],
    providers: [BackdropService, Configuration]
})
export class SharedModule {}