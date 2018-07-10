import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Card } from '../../models/card';
import { List } from '../../models/list';

@Component({
  selector: 'kanban-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List = new List();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteList() {
    this.delete.emit(this.list);
  }

  createCard() {
    this.list.cards.push(new Card());
  }

  deleteCard(card) {
    this.list.cards.splice(this.list.cards.indexOf(card), 1);
  }
}
