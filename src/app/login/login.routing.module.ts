import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { LoginEntradaComponent } from "./login-entrada/login-entrada.component";
import { ChatComponent } from "./chat/chat.component";

const loginRoutes=[
    { path: 'login', component: LoginComponent},
    { path: 'login-entrada', component: LoginEntradaComponent },
    { path: 'chat', component: ChatComponent },
    

];

@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
})

export class LoginRoutingModule{}