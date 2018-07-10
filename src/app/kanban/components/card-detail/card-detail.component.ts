import { Component, OnInit } from '@angular/core';

import { Card } from '../../models/card';

@Component({
  selector: 'kanban-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  card: Card;

  constructor() { }

  ngOnInit() {
  }

}
