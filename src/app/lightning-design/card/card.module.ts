import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardHeaderActionComponent } from './card-header-action/card-header-action.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderActionComponent,
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardHeaderActionComponent,
    CardBodyComponent,
    CardFooterComponent,
  ]
})
export class CardModule { }
