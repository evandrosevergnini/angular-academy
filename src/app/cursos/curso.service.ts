import { Injectable } from '@angular/core';

function curso() {
  return { curso: 'Angular 10' }
}
@Injectable({
  providedIn: 'root',
  useValue: curso()
})
export class CursoService {

  constructor() {
    console.log('Criando CursoSevice...');
   }
}
