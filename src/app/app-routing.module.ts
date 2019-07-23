//Configurações

import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { CadastrarComponent } from './cadastro/cadastrar/cadastrar.component';
import { CadastroclienteComponent } from './cadastro/cadastrocliente/cadastrocliente.component';
import { CadastroprestadorComponent } from './cadastro/cadastroprestador/cadastroprestador.component';



const routes: Routes = [
    { path:'', component: PaginainicialComponent },
    { path: 'cadastrar', component: CadastrarComponent },
    { path: 'cadastrocliente', component: CadastroclienteComponent },
    { path: 'cadastroprestador', component: CadastroprestadorComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}