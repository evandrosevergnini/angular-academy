import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent implements OnInit {

  @Input()
  title: string = "Título do card";

  constructor() { }

  ngOnInit(): void {
  }

}
