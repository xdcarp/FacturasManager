import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/pageNotFound/pageNotFound.component';
import { ListaPersonasComponent } from './personas/lista/listapersonas.component';
import { AltaPersonaComponent } from './personas/alta/altapersona.component';
import { EdicionPersonaComponent } from './personas/edicion/edicionpersona.component';
import { BajaPersonaComponent } from './personas/baja/bajapersona.component'
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const routes: Routes = [
    { path: '', component: ListaPersonasComponent },
    { path: 'listado-personas', component: ListaPersonasComponent },
    { path: 'alta-persona', component: AltaPersonaComponent },
    { path: 'editar-persona', component: EdicionPersonaComponent },
    { path: 'baja-persona', component: BajaPersonaComponent },
    // { path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    { path: '**', component: PageNotFoundComponent },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }