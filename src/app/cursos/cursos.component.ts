import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[];
  erro: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/cursos')
    .subscribe(
      cursos => {
        this.cursos = <Curso[]>cursos;
      },
      err => {
        this.erro = true;
        console.error('Erro ao buscar cursos', err)
      }
    )
  }

}
