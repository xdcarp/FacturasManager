import { Component, Injectable, EventEmitter } from '@angular/core';

import { BackdropService } from '../../_services/backdrop/backdrop.service';

@Component({
    selector: 'backdrop',
    template: require('./backdrop.component.html')
})
export class BackdropComponent {
    isVisible: boolean;

    constructor(private backdropService: BackdropService) {
        this.isVisible = false;
        this.backdropService.Toggle.subscribe(isVisible=>this.isVisible = isVisible);
    }
    
    onClick() {
        this.backdropService.hide();
    }
}