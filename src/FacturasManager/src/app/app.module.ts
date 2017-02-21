import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuesService } from './_services/menu.service';
import { PersonasService } from './_services/personas/personas.service';
import { ODDService } from './_services/odd/odd.service';
import { ClickAfueraDirective } from './_directives/clickAfuera.directive';

import { PageNotFoundComponent } from './shared/pageNotFound.component';

import { MainNavBar } from './mainNavBar/mainNavBar.component';
import { SidebarNav } from './sidebarNav/sidebarNav.component';
import { Dashboard } from './dashboard/dashboard.component';
import { FooterNav } from './footerNav/footerNav.component';

import { PersonaModule } from './personas/personas.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MaterialModule.forRoot(),
        AppRoutingModule,
        PersonaModule
        /*,
        MultiselectDropdownModule,
        ChartsModule,        
        CoreModule,
        TicketsModule,
        DashboardModule,
        UsuariosModule*/
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        MainNavBar,
        SidebarNav,
        Dashboard,
        FooterNav,        
        ClickAfueraDirective
        /*GtNavComponent,
        GtUsuarioinfoComponent,
        GtRouteSecuredDirective*/
    ],
    providers: [MenuesService, PersonasService, ODDService],
    bootstrap: [AppComponent]
})
export class AppModule { }