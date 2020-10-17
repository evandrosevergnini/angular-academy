import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(http: HttpClient) {
    console.log("Criando um serviço para cursos...", http);
   }

}
