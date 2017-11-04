import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// import dos componentes das rotas principais
import { MaterialApoioComponent } from './components/material-apoio/material-apoio.component';
import { MetodologiaComponent } from './components/metodologia/metodologia.component';
import { ProjetoComponent } from './components/projeto/projeto.component';
import { EquipeComponent } from './components/equipe/equipe.component';


// rotas, servicos e modulos

import { MapasComponent } from "./components/mapas/mapas.component";
import { ModuleWithProviders } from '@angular/core';


const appRouters: Routes = [
    { path: '', component: ProjetoComponent },
    { path: 'mapas', component: MapasComponent  },
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
    MaterialApoioComponent
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
