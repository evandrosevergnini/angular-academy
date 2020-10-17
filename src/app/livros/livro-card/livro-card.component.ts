import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'livro-card',
  templateUrl: './livro-card.component.html',
  styleUrls: ['./livro-card.component.scss']
})
export class LivroCardComponent implements OnInit {

  @Input()
  livro: Livro;
  constructor() { }

  ngOnInit(): void {
  }

}
