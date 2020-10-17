import { HttpClient } from '@angular/common/http';
import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { CursoService } from './cursos/curso.service';

export const CURSO_SERVICE = new InjectionToken('CURSO_SERVICE');

export function cursoServiceProvider(http: HttpClient) {
  return new CursoService(http);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: CURSO_SERVICE,
    useFactory: cursoServiceProvider,
    deps: [HttpClient]
  }]
})
export class AppComponent implements OnInit {
  title = 'Angular Academy';

  constructor(@Inject(CURSO_SERVICE) private cursoService: CursoService) {}

  ngOnInit(): void {
    console.log(this);
  }



}
