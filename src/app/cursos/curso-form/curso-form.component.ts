import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Curso } from '../curso';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  curso: Curso;
  categories = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

  constructor(private route: ActivatedRoute, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (payload) => this.curso = payload.curso)
  }

  atualizaCurso() {
    console.log(this.curso);
    this.cursoService.atualizaCurso(this.curso)
    .pipe(first())
    .subscribe();
  }

}
