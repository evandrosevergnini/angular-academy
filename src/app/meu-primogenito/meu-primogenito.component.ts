import { Component, Input, OnInit } from '@angular/core';
import { Filho } from './filho';

@Component({
  selector: 'meu-primogenito',
  templateUrl: './meu-primogenito.component.html',
  styleUrls: ['./meu-primogenito.component.scss']
})
export class MeuPrimogenitoComponent implements OnInit {

  @Input()
  filho: Filho;

  constructor() {}

  ngOnInit(): void {
  }

  onInput(ev: KeyboardEvent) {
    this.filho.nome = (ev.target as HTMLInputElement).value
  }

}
