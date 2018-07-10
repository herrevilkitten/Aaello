import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Card } from '../../models/card';
import { Task } from '../../models/task';

@Component({
  selector: 'kanban-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteCard() {
    this.delete.emit(this.card);
  }

  createTask() {
    this.card.tasks.push(new Task());
  }
}
