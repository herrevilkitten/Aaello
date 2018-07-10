import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

import { Card } from '../../models/card';
import { Task } from '../../models/task';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'kanban-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  deleteCard() {
    this.delete.emit(this.card);
  }

  createTask() {
    this.card.tasks.push(new Task());
  }

  openDetailModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
