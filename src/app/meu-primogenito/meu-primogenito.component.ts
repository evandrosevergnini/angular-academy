import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Filho } from './filho';

@Component({
  selector: 'meu-primogenito',
  templateUrl: './meu-primogenito.component.html',
  styleUrls: ['./meu-primogenito.component.scss'],
})
export class MeuPrimogenitoComponent implements OnInit, OnChanges {

  @Input()
  filho: Filho;

  neto: Filho = new Filho('Platão');
  @ViewChild('filhoEl') filhoEl;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.dir(changes);
    // for (const property in changes) {
    //   console.log(property);
    //   console.log(changes[property]);
    // }
  }

  onInput(ev: KeyboardEvent) {
    this.filho.nome = (ev.target as HTMLInputElement).value;
  }

  onModelChange(ev: string) {
    console.log(ev);
  }

}
