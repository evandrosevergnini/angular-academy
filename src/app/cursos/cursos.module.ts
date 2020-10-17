import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoCardComponent } from './curso-card/curso-card.component';
import { CursoService } from './curso.service';

@NgModule({
  declarations: [CursosComponent, CursoCardComponent],
  imports: [CommonModule, CursosRoutingModule, HttpClientModule],
  providers: [HttpClient, CursoService],
  exports: [CursosComponent]
})
export class CursosModule {}
