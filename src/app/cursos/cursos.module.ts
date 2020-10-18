import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoCardComponent } from './curso-card/curso-card.component';
import { CursoFormComponent } from './curso-form/curso-form.component';

@NgModule({
  declarations: [CursosComponent, CursoCardComponent, CursoFormComponent],
  imports: [CommonModule, CursosRoutingModule, HttpClientModule],
  providers: [HttpClient],
  exports: [CursosComponent]
})
export class CursosModule {}
