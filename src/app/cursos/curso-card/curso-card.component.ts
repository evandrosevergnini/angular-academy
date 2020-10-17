import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent implements OnInit {

  @Input()
  curso: Curso;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    console.log(this);
  }

}
