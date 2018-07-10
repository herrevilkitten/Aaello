import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DragulaModule } from 'ng2-dragula';

import { ButtonsModule, ModalModule } from 'ngx-bootstrap';

import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    DragulaModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [
    BoardComponent,
    CardComponent,
    ListComponent,
    TaskComponent,
    CardDetailComponent
  ],
  exports: [
    BoardComponent,
    ListComponent,
    CardComponent,
    TaskComponent,
  ]
})
export class KanbanModule { }
