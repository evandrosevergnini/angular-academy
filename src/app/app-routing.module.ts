import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { LivrosComponent } from './livros/livros.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  { path: 'cursos', component: CursosComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'cantina', component: ProdutoListaComponent },
  { path: '**', component: PageNotFoundComponent },
  // {
  //   path: 'livros',
  //   loadChildren: () =>
  //     import('./livros/livros.module').then((m) => m.LivrosModule),
  // },
  // {
  //   path: 'cursos',
  //   loadChildren: () =>
  //     import('./cursos/cursos.module').then((m) => m.CursosModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
