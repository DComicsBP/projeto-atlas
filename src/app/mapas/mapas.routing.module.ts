import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AdministrativosComponent } from "./administrativos/administrativos.component";
import { DemografiaComponent } from "./demografia/demografia.component";
import { MortalidadeComponent } from "./mortalidade/mortalidade.component";
import { SambientalComponent } from "./sambiental/sambiental.component";
import { ViolenciaComponent } from "./violencia/violencia.component";
import { MapasComponent } from "./mapas.component";

/*
sempre colocar na ordem que aparece no componente (lembrar os problemas com o 
hard coded da loiane)

*/
const mapasRoutes=[
    { path: 'mapas', component: MapasComponent},
    { path: 'mapas/demografia', component: DemografiaComponent },
    { path: 'mapas/administrativos', component: AdministrativosComponent },
    { path: 'mapas/violencia', component: ViolenciaComponent},
    { path: 'mapas/mortalidade', component: MortalidadeComponent }, 
    { path: 'mapas/sambiental', component: SambientalComponent }
  

];

@NgModule({
    imports: [RouterModule.forChild(mapasRoutes)],
    exports: [RouterModule]
})

export class MapasRoutingModule{}