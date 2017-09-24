import { Routes, RouterModule } from '@angular/router';
import { ProjetoComponent } from './projeto/projeto.component';
import { MaterialApoioComponent } from './material-apoio/material-apoio.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';

import { ModuleWithProviders, NgModule } from '@angular/core';


const appRouters: Routes = [
    { path: 'mapas', loadChildren : 'app/mapas/mapas.module#MapasModule' },
    { path: '', component: ProjetoComponent },
    { path: 'material', component: MaterialApoioComponent },
    { path: 'equipe', component: EquipeComponent },
    { path: 'metodologia', component: MetodologiaComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'login', component: LoginComponent }
];
    @NgModule ({
      imports: [
        RouterModule.forRoot(appRouters)
     ],
      exports: [
        RouterModule
      ]
    })
    export class AppRoutingModule { }
