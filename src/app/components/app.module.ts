import { MaterialAopioModule } from './material-apoio/material-apoio.module';
import { MaterialApoioService } from './material-apoio/material-apoio.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


// import dos componentes das rotas principais
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { EquipeComponent } from './equipe/equipe.component';
import { LegendasComponent } from './legendas/legendas.component';
import { MaterialApoioComponent } from './material-apoio/material-apoio.component';


// rotas, servicos e modulos

import { ModuleWithProviders } from '@angular/core';
import { RegioesComponent, SafePipe } from './regioes/regioes.component';
import { CommonModule } from '@angular/common';

const appRouters: Routes = [
    { path: '', component: ProjetoComponent },
    { path: 'projeto', component: ProjetoComponent },
    { path: 'equipe', component: EquipeComponent },
    { path: 'metodologia', component: MetodologiaComponent },
    { path: 'material/', component: MaterialApoioComponent },
     { path: 'material/:id', component: MaterialApoioComponent },
    { path: 'regioes/:id', component: RegioesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    ProjetoComponent,
    MetodologiaComponent,
    RegioesComponent,
    SafePipe,
    LegendasComponent,
    ],
  imports: [
    RouterModule.forRoot(appRouters),
     BrowserModule,
     CommonModule,
     MaterialAopioModule

    ],
    exports: [
      RouterModule
    ],
    providers: [MaterialApoioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
