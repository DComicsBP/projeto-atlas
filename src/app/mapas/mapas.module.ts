import { NgModule } from '@angular/core';
import { MapasComponent } from './mapas.component';
import { CommonModule } from "@angular/common";

import { DemografiaComponent } from "./demografia/demografia.component";
import { AdministrativosComponent } from "./administrativos/administrativos.component";
import { MortalidadeComponent } from "./mortalidade/mortalidade.component";
import { SambientalComponent } from "./sambiental/sambiental.component";
import { ViolenciaComponent } from "./violencia/violencia.component";

import { MapasRoutingModule } from "./mapas.routing.module";


@NgModule({
    imports:[
        CommonModule,
        MapasRoutingModule
    ], 
    exports:[], 
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