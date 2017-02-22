import { Component, Injectable, EventEmitter } from '@angular/core';

import { BackdropService } from '../../_services/backdrop/backdrop.service';
import { SidebarNavService } from '../../_services/sidebarNav/sidebarNav.service';

@Component({
    selector: 'backdrop',
    template: require('./backdrop.component.html')
})
export class BackdropComponent {
    isVisible: boolean;

    constructor(private backdropService: BackdropService, private sidebarNavService: SidebarNavService) {
        this.isVisible = false;
        this.backdropService.Toggle.subscribe(isVisible => this.isVisible = isVisible);
        
        this.sidebarNavService.VisibilityChanged.subscribe();
    }
    
    onClick() {
        this.backdropService.hide();
    }
}