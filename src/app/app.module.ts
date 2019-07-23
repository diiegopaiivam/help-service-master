import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CadastroclienteComponent } from './cadastro/cadastrocliente/cadastrocliente.component';
import { CadastroprestadorComponent } from './cadastro/cadastroprestador/cadastroprestador.component';
import { CadastrarComponent } from './cadastro/cadastrar/cadastrar.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginainicialService } from './paginainicial/paginainicial.service';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    CadastroclienteComponent,
    CadastroprestadorComponent,
    PaginainicialComponent,
    CadastrarComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule

  ],
  providers: [PaginainicialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
