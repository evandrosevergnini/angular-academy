import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoFormComponent } from './curso-form/curso-form.component';

import { CursosComponent } from './cursos.component';
import { CursoResolverService } from './services/curso-resolver.service';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: ':cursoId', component: CursoFormComponent, resolve: {curso: CursoResolverService}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CursoResolverService]
})
export class CursosRoutingModule { }
