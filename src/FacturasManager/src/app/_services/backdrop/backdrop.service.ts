import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BackdropService {
    
    isVisible: boolean;
    public Toggle: EventEmitter<boolean>;

    constructor() {
        this.Toggle = new EventEmitter<boolean>();
        this.isVisible = false;
    }
    
    public show() { 
        this.isVisible = true;
        this.Toggle.emit(this.isVisible);
    }

    public hide() { 
         this.isVisible = false;
         this.Toggle.emit(this.isVisible); 
    }    
}
