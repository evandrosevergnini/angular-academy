import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  erro: boolean;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    console.log(this);
    this.cursos$ = this.cursoService.carregaCursos()
    .pipe(
      catchError( error => {
        this.erro = true;
        console.error('Ocorreu um erro ao buscar lista de cursos', error);
        return of<Curso[]>();
      })
    );
  }

}
