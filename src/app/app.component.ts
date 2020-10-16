import { Component } from '@angular/core';
import { Filho } from './meu-primogenito/filho';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Academy';
  filho = new Filho('Evandro');
}
