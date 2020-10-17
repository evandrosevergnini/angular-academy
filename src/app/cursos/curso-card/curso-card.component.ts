import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent implements OnInit {

  @Input()
  curso: Curso;

  constructor() { }

  ngOnInit(): void {
  }

}
