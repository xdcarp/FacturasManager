import { Component } from '@angular/core';
import { MaterialModule } from '@angular/material';
//import { Router } from '@angular/router';

import { MenuesService } from './_services/menu.service';
import { PersonasService } from './_services/personas/personas.service';
import { ODDService } from './_services/odd/odd.service';
import { ClickAfueraDirective } from './_directives/clickAfuera.directive';

import { MainNavBar } from './mainNavBar/mainNavBar.component';
import { SidebarNav } from './sidebarNav/sidebarNav.component';
import { Dashboard } from './dashboard/dashboard.component';
import { FooterNav } from './footerNav/footerNav.component';

import { ListaSeleccionablePersonasComponent } from './personas/_shared/listaseleccionable.component';
import { ListaPersonasComponent } from './personas/lista/listapersonas.component';
import { AltaPersonaComponent } from './personas/alta/altapersona.component';
import { EdicionPersonaComponent } from './personas/edicion/edicionpersona.component';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent {
  
    
}
