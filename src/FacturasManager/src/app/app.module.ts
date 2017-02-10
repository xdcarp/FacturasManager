import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { MainNavBar } from './mainNavBar/mainNavBar.component';
import { SidebarNav } from './sidebarNav/sidebarNav.component';
import { Dashboard } from './dashboard/dashboard.component';
import { FooterNav } from './footerNav/footerNav.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MaterialModule.forRoot()
        /*,
        MultiselectDropdownModule,
        ChartsModule,
        AppRoutingModule,
        CoreModule,
        TicketsModule,
        DashboardModule,
        UsuariosModule*/
    ],
    declarations: [
        AppComponent,
        MainNavBar,
        SidebarNav,
        Dashboard,
        FooterNav
        /*GtNavComponent,
        GtUsuarioinfoComponent,
        GtRouteSecuredDirective*/
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }