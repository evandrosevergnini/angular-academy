import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from './db-produtos';
import { Produto } from './produto';

@Component({
  selector: 'produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {

  produtos: Produto[];

  constructor() { }

  ngOnInit(): void {
    this.produtos = PRODUTOS;
  }

}
