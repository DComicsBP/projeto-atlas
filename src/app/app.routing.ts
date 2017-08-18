



import { Routes, RouterModule } from "@angular/router";

import { ProjetoComponent } from "./projeto/projeto.component";
import { MaterialApoioComponent } from "./material-apoio/material-apoio.component";
import { EquipeComponent } from "./equipe/equipe.component";
import { MetodologiaComponent } from "./metodologia/metodologia.component";

import { ModuleWithProviders } from "@angular/core/core";

const appRouters: Routes = [
    { path: 'mapas', loadChildren : 'app/mapas/mapas.module#MapasModule' },
    { path: '', component: ProjetoComponent }, 
    { path: 'material', component: MaterialApoioComponent },
    { path: 'equipe', component: EquipeComponent },
    { path: 'metodologia', component: MetodologiaComponent }

];
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);

