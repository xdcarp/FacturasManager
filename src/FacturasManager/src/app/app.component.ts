import { Component } from '@angular/core';
import { MaterialModule } from '@angular/material';
//import { Router } from '@angular/router';

import { MainNavBar } from './mainNavBar/mainNavBar.component';
import { SidebarNav } from './sidebarNav/sidebarNav.component';
import { Dashboard } from './dashboard/dashboard.component';
import { FooterNav } from './footerNav/footerNav.component';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent {
  
    
}
