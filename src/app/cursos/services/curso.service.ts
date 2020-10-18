import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor(private http: HttpClient) {}

  carregaCursoPorId(id: string): Observable<Curso> {
    return this.http.get<Curso>(`http://localhost:3000/cursos/${id}`);
  }
  carregaCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://localhost:3000/cursos');
  }

  atualizaCurso(curso: Curso): Observable<Curso> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.put<Curso>(
      `http://localhost:3000/cursos/${curso.id}`,
      curso,
      { headers }
    );
  }
}
