import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[clickAfuera]'
})
export class ClickAfueraDirective {
    constructor(private _elementRef : ElementRef) {
    }

    @Output()
    public clickAfuera = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        
        if (!clickedInside) {
            this.clickAfuera.emit(targetElement);
        }
    }
}