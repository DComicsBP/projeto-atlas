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

import { ModuleWithProviders } from '@angular/core';
import { RegioesComponent, SafePipe } from './regioes/regioes.component';

const appRouters: Routes = [
    { path: '', component: ProjetoComponent },
    { path: 'projeto', component: ProjetoComponent },
    { path: 'material', component: MaterialApoioComponent },
    { path: 'equipe', component: EquipeComponent },
    { path: 'metodologia', component: MetodologiaComponent },
    { path: 'regioes/:id', component: RegioesComponent }
];



@NgModule({
  declarations: [

    AppComponent,
    EquipeComponent,
    ProjetoComponent,
    MetodologiaComponent,
    MaterialApoioComponent,
    RegioesComponent,
    SafePipe
  ],
  imports: [
    RouterModule.forRoot(appRouters),
     BrowserModule

    ],
    exports: [
      RouterModule
    ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
