import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Filho } from '../models/filho';

@Component({
  selector: 'registro-civil',
  templateUrl: './registro-civil.component.html',
  styleUrls: ['./registro-civil.component.scss']
})
export class RegistroCivilComponent implements OnInit {

  registro: string = 'Ezandro' ;

  @Input()
  filho: Filho;

  @Output('certidao')
  nomeAlterado = new EventEmitter<Filho>();

  @ViewChild('nomeInputElement') input: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  onInput(ev: KeyboardEvent) {
    this.filho.nome = (ev.target as HTMLInputElement).value
  }

  onClick() {
    this.registro = this.input.nativeElement.value;
    this.filho.nome = this.registro;
    this.nomeAlterado.emit(this.filho);
  }

}
