import { Component, OnInit, Input } from '@angular/core';

@Component({
  /* ts-lint:disable-next-line */
  selector: 'ld-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent implements OnInit {
   @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}
