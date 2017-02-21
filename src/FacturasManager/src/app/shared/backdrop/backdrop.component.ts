import { Component, Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class BackdropService {
    constructor() {
        this.Toggle = new EventEmitter<boolean>();
        this.isVisible = false;
    }
    isVisible: boolean;
    public show() { 
        this.isVisible = true;
        this.Toggle.emit(this.isVisible);
    }
     public hide() { 
         this.isVisible = false;
         this.Toggle.emit(this.isVisible); 
    }
    public Toggle: EventEmitter<boolean>;
}

@Component({
    selector: 'backdrop',
    template: require('./backdrop.component.html')
})
export class BackdropComponent {
    constructor(private backdropService: BackdropService) {
        this.isVisible = false;
        this.backdropService.Toggle.subscribe(isVisible=>this.isVisible = isVisible);
    }
    isVisible: boolean;
    onClick() {
        this.backdropService.hide();
    }
}
