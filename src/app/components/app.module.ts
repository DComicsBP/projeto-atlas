import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// import dos componentes das rotas principais
import { MaterialApoioComponent } from './material-apoio/material-apoio.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { EquipeComponent } from './equipe/equipe.component';


// rotas, servicos e modulos

import { MapasComponent } from './mapas/mapas.component';
import { ModuleWithProviders } from '@angular/core';
import { PelotasComponent } from './pelotas/pelotas.component';
import { PoaComponent } from './poa/poa.component';
import { SerraaComponent } from './serraa/serraa.component';
import { RsgComponent } from './rsg/rsg.component';


const appRouters: Routes = [
    { path: '', component: ProjetoComponent },
    { path: 'rsg', component: RsgComponent  },
    { path: 'pelotas', component: PelotasComponent  },
    { path: 'poa', component: PoaComponent  },
    { path: 'serra', component: SerraaComponent  },
    { path: 'material', component: MaterialApoioComponent },
    { path: 'equipe', component: EquipeComponent },
    { path: 'metodologia', component: MetodologiaComponent }
];



@NgModule({
  declarations: [
    MapasComponent,
    AppComponent,
    EquipeComponent,
    ProjetoComponent,
    MetodologiaComponent,
    MaterialApoioComponent,
    PelotasComponent,
    PoaComponent,
    SerraaComponent,
    RsgComponent

      ],
  imports: [
    RouterModule.forRoot(appRouters),

    BrowserModule

    ],
    exports: [
      RouterModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
