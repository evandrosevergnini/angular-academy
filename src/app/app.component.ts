import { Component, OnInit } from '@angular/core';
import { CursoService } from './cursos/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Academy';

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    console.log(this);
  }



}
