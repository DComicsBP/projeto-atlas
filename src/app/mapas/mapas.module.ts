import { NgModule } from '@angular/core';
import { MapasComponent } from './mapas.component';
import { CommonModule } from '@angular/common';
import { MapasRoutingModule } from './mapas.routing.module';
import { DemografiaComponent } from './demografia/demografia.component';
import { MortalidadeComponent } from './mortalidade/mortalidade.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { SambientalComponent } from './sambiental/sambiental.component';
import { ViolenciaComponent } from './violencia/violencia.component';


@NgModule({
    imports:[
        CommonModule,
        MapasRoutingModule
    ],
    exports:[
      MapasModule
    ],
    declarations: [
        MapasComponent,
        DemografiaComponent,
        MortalidadeComponent,
        AdministrativosComponent,
        SambientalComponent,
        ViolenciaComponent
    ],
    providers: []


})
export class MapasModule{}
