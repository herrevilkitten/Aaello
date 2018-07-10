import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

import { LightningDesignModule } from '../lightning-design/lightning-design.module';

import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    LightningDesignModule
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
