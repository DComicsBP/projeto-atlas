import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapasComponent } from './mapas.component';
import { DemografiaComponent } from './demografia/demografia.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { ViolenciaComponent } from './violencia/violencia.component';
import { MortalidadeComponent } from './mortalidade/mortalidade.component';
import { SambientalComponent } from './sambiental/sambiental.component';


const mapasRoutes = [
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


// tslint:disable-next-line:one-line
export class MapasRoutingModule{ }
