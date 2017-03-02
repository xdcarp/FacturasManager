import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/pageNotFound/pageNotFound.component';
import { ListaPersonasComponent } from './personas/lista/listapersonas.component';
import { AltaPersonaComponent } from './personas/alta/altapersona.component';
import { EdicionPersonaComponent } from './personas/edicion/edicionpersona.component';
import { BajaPersonaComponent } from './personas/baja/bajapersona.component'
import { ListaOddComponent } from './odd/lista/listaodd.component';
import { AltaOddComponent } from './odd/alta/altaodd.component';
import { EdicionOddComponent } from './odd/edicion/edicionodd.component';
import { BajaOddComponent } from './odd/baja/bajaodd.component'
import { ModificarPlanComponent } from './plan/modificar/modificarplan.component';
import { VerPlanComponent } from './plan/verplan/verplan.component';


const routes: Routes = [
    { path: '', component: VerPlanComponent },
    { path: 'listado-personas', component: ListaPersonasComponent },
    { path: 'alta-persona', component: AltaPersonaComponent },
    { path: 'editar-persona', component: EdicionPersonaComponent },
    { path: 'baja-persona', component: BajaPersonaComponent },
    { path: 'editar-odd', component: EdicionOddComponent },
    { path: 'baja-odd', component: BajaOddComponent },
    { path: 'listado-odd', component: ListaOddComponent },
    { path: 'alta-odd', component: AltaOddComponent },
    { path: 'ver-plan', component: VerPlanComponent },
    { path: 'modificar-plan', component: ModificarPlanComponent },
    { path: '**', component: PageNotFoundComponent }
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }