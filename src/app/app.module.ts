import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";

import { EquipeComponent } from "./equipe/equipe.component";
import { ProjetoComponent } from "./projeto/projeto.component";
import { MetodologiaComponent } from "./metodologia/metodologia.component";
import { MaterialApoioComponent } from "./material-apoio/material-apoio.component";

import { routing } from "./app.routing";

// componentes dos mapas
import { DemografiaComponent } from "./demografia/demografia.component";
import { AdministrativosComponent } from "./administrativos/administrativos.component";
import { MortalidadeComponent } from "./mortalidade/mortalidade.component";
import { SambientalComponent } from "./sambiental/sambiental.component";
import { ViolenciaComponent } from "./violencia/violencia.component";


@NgModule({
  declarations: [
    
    AppComponent,
    EquipeComponent, 
    ProjetoComponent,
    MetodologiaComponent,
    MaterialApoioComponent,
    DemografiaComponent,
    AdministrativosComponent,
    MortalidadeComponent, 
    SambientalComponent,
    ViolenciaComponent
        
  ],
  imports: [
    
    BrowserModule,
    routing,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
