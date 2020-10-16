import { Component, OnInit } from '@angular/core';
import { Filho } from './models/filho';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Academy';
  filho: Filho;

  constructor() {
    const context = this;
    setTimeout(() => {
      context.filho = new Filho('Evandro');
    }, 5000);
  }

  confereNomeAlterado(filho: Filho){
    console.log(this.filho.nome);
    console.log(filho);
    console.log(this.filho.nome === filho.nome ? "Ok" : "Ops!!!");
  }

}
