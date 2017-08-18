import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AdministrativosComponent } from "./administrativos/administrativos.component";
import { DemografiaComponent } from "./demografia/demografia.component";
import { MortalidadeComponent } from "./mortalidade/mortalidade.component";
import { SambientalComponent } from "./sambiental/sambiental.component";
import { ViolenciaComponent } from "./violencia/violencia.component";
import { MapasComponent } from "./mapas.component";

const mapasRoutes=[
    { path: '', component: MapasComponent},
    { path: 'demografia', component: DemografiaComponent },
    { path: 'administrativos', component: AdministrativosComponent },
    { path: 'violencia', component: ViolenciaComponent},
    { path: 'mortalidade', component: MortalidadeComponent }, 
    { path: 'sambiental', component: SambientalComponent }
  

];

@NgModule({
    imports: [RouterModule.forChild(mapasRoutes)],
    exports: [RouterModule]
})

export class MapasRoutingModule{}