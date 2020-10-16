import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { LivrosModule } from './livros/livros.module';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LivrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
