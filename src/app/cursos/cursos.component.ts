import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Curso } from './curso';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  erro: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cursos$ = this.http.get<Curso[]>('http://localhost:3000/cursos')
    .pipe(
      catchError( error => {
        this.erro = true;
        console.error('Ocorreu um erro ao buscar lista de cursos', error);
        return of<Curso[]>();
      })
    );
  }

}
