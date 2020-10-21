import { Component, OnInit } from '@angular/core';
import { Filho } from './meu-primogenito/filho';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  title = 'Angular Academy';
  filho = new Filho('Evandro');

  ngOnInit(): void {
    const ctx = this;
    let counter = 0;
    const id = setInterval( () => {
      counter += + 1;
      if (Date.now() % 2 === 0){
        ctx.filho = new Filho('Antonio');
      } else {
        ctx.filho = new Filho('Natanael');
      }
      if (counter >= 5) {
        clearInterval(id)
      }
    },5000);

  }

}
