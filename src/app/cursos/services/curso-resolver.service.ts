import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../curso';
import { CursoService } from './curso.service';

@Injectable()
export class CursoResolverService implements Resolve<Curso> {

  constructor(private cursoService: CursoService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    const id: string = route.paramMap.get('cursoId');
    return this.cursoService.carregaCursoPorId(id);
  }
}
