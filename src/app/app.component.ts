import { HttpClient } from '@angular/common/http';
import { Component, InjectionToken, OnInit } from '@angular/core';
import { CursoService } from './cursos/curso.service';

const CURSO_SERVICE = new InjectionToken<CursoService>('CURSO_SERVICES');
function cursoSeviceProvider(http: HttpClient): CursoService {
  return new CursoService(http);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular Academy';

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    console.log(this);
  }



}
