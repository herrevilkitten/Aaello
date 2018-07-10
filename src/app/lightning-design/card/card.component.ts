import { Component, OnInit, Input } from '@angular/core';

/* ts-lint:disable:component-selector */
/* ts-lint:disable:directive-selector */
@Component({
  selector: 'ld-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() header = '';

  constructor() { }

  ngOnInit() {
  }

}
