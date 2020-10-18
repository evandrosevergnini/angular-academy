import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../curso';

@Component({
  selector: 'curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  curso: Curso;
  categories = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (payload) => this.curso = payload.curso)
  }

  salvaCurso() {
    console.log(this.curso);
  }

}
