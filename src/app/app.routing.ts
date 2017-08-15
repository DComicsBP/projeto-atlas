



import { Routes, RouterModule } from "@angular/router";

import { ProjetoComponent } from "./projeto/projeto.component";

import { MaterialApoioComponent } from "./material-apoio/material-apoio.component";
import { EquipeComponent } from "./equipe/equipe.component";
import { MetodologiaComponent } from "./metodologia/metodologia.component";

//vai virar o modulo mapas
import { AdministrativosComponent } from "./administrativos/administrativos.component";


import { ModuleWithProviders } from "@angular/core/core";
import { DemografiaComponent } from "./demografia/demografia.component";
import { ViolenciaComponent } from "./violencia/violencia.component";
import { SambientalComponent } from "./sambiental/sambiental.component";
import { MortalidadeComponent } from "./mortalidade/mortalidade.component";

const appRouters: Routes = [
    { path: '', component: ProjetoComponent }, 
    
    { path: 'material', component: MaterialApoioComponent },
    { path: 'equipe', component: EquipeComponent },
    { path: 'metodologia', component: MetodologiaComponent },
    { path: 'administrativo', component: AdministrativosComponent },
    { path: 'demografia', component: DemografiaComponent },
    { path: 'mortalidade', component: MortalidadeComponent }, 
    { path: 'sambiental', component: SambientalComponent }, 
    { path: 'violencia', component: ViolenciaComponent}


];
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);

