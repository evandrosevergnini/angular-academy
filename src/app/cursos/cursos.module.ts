import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoCardComponent } from './curso-card/curso-card.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CursosComponent, CursoCardComponent, CursoFormComponent],
  imports: [CommonModule, CursosRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpClient],
  exports: [CursosComponent]
})
export class CursosModule {}
