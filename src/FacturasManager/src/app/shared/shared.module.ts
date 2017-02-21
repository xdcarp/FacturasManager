import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackdropService } from '../_services/backdrop/backdrop.service';

import { PageNotFoundComponent } from '../shared/pageNotFound/pageNotFound.component';
import { BackdropComponent } from '../shared/backdrop/backdrop.component';

@NgModule({
    declarations: [PageNotFoundComponent, BackdropComponent],
    imports: [CommonModule],
    exports: [PageNotFoundComponent, BackdropComponent],
    providers: [BackdropService]
})
export class SharedModule {}