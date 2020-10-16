import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimogenitoComponent } from './meu-primogenito/meu-primogenito.component';
import { FormsModule } from '@angular/forms';
import { RegistroCivilComponent } from './registro-civil/registro-civil.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimogenitoComponent,
    RegistroCivilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
