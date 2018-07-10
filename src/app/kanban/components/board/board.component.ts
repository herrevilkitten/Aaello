import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Board } from '../../models/board';
import { List } from '../../models/list';

const COLORS = [
  'lightblue',
  'lightgreen',
  'lightcoral',
  'lightgray',
];
let colorCounter = 0;

@Component({
  selector: 'kanban-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() board: Board = new Board();

  @Output() action: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createList() {
    const list = new List();
    list.color = COLORS[colorCounter % COLORS.length];
    console.log(list.color, colorCounter, COLORS);
    colorCounter = colorCounter + 1;
    this.board.lists.push(list);
  }

  deleteList(list: List) {
    console.log(list);
    this.board.lists.splice(this.board.lists.indexOf(list), 1);
  }
}
