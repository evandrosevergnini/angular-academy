import { Component, OnInit } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  livros: Livro[];
  erro: boolean;
  constructor() { }

  ngOnInit(): void {
    fetch('http://localhost:3000/livros')
    .then(response => {
      if (!response.ok) throw Error('Não foi possível obter a lista de livros!')
      return response.json()
    })
    .then(livros => this.livros = livros)
    .catch(err => {
      this.erro = true;
      //console.error(`%c Erro ao buscar lista de produtos: (${err})`, 'background: darkred; color: lightblue; padding: 1rem')
      console.error('Erro ao buscar lista de livros', err);
    })
  }

}
