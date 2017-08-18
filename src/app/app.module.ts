import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";

//import dos componentes das rotas principais
import { EquipeComponent } from "./equipe/equipe.component";
import { ProjetoComponent } from "./projeto/projeto.component";
import { MetodologiaComponent } from "./metodologia/metodologia.component";
import { MaterialApoioComponent } from "./material-apoio/material-apoio.component";

//rotas e modulos
import { routing } from "./app.routing";
import { MapasModule } from "./mapas/mapas.module";



@NgModule({
  declarations: [
    
    AppComponent,
    EquipeComponent, 
    ProjetoComponent,
    MetodologiaComponent,
    MaterialApoioComponent,
  
    
        
  ],
  imports: [
    
    BrowserModule,
    routing,
    MapasModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
