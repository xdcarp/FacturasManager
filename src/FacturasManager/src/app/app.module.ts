import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuesService } from './_services/menu.service';
import { PersonasService } from './_services/personas/personas.service';
import { ODDService } from './_services/odd/odd.service';
import { SidebarNavService } from './_services/sidebarNav/sidebarNav.service';
import { ClickAfueraDirective } from './_directives/clickAfuera.directive';

import { MainNavBar } from './mainNavBar/mainNavBar.component';
import { SidebarNav } from './sidebarNav/sidebarNav.component';
import { Dashboard } from './dashboard/dashboard.component';
import { FooterNav } from './footerNav/footerNav.component';

import { SharedModule } from './shared/shared.module';
import { PersonaModule } from './personas/personas.module';
import { ODDModule } from './odd/odd.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MaterialModule.forRoot(),
        NgbModule.forRoot(),
        AppRoutingModule,
        SharedModule,
        PersonaModule,
        ODDModule
    ],
    declarations: [
        AppComponent,
        MainNavBar,
        SidebarNav,
        Dashboard,
        FooterNav,        
        ClickAfueraDirective        
    ],
    providers: [MenuesService, PersonasService, ODDService, SidebarNavService],
    bootstrap: [AppComponent]
})
export class AppModule { }