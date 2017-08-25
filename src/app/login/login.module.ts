import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { LoginRoutingModule } from "./login.routing.module";
import { LoginEntradaComponent } from "./login-entrada/login-entrada.component";
import { ChatComponent } from "./chat/chat.component";
import { LoginComponent } from "./login.component";


@NgModule({
    imports:[
        CommonModule,
        LoginRoutingModule
    ], 
    exports:[], 
    declarations: [
        LoginEntradaComponent,
        ChatComponent,
        LoginComponent
        
    ],
    providers: []


})
export class LoginModule{ }