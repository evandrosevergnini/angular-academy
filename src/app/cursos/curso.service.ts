import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() {
    console.log("Criando um serviço para cursos...");
   }
}
