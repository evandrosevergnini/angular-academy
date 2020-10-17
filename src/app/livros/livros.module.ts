import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros.component';
import { LivroCardComponent } from './livro-card/livro-card.component';

@NgModule({
  declarations: [LivrosComponent, LivroCardComponent],
  exports: [LivrosComponent],
  imports: [
    CommonModule,
    LivrosRoutingModule
  ]
})
export class LivrosModule { }
