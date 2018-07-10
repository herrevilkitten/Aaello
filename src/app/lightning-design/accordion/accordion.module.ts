import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionItemSummaryComponent } from './accordion-item-summary/accordion-item-summary.component';
import { AccordionItemContentComponent } from './accordion-item-content/accordion-item-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemSummaryComponent,
    AccordionItemContentComponent
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemSummaryComponent,
    AccordionItemContentComponent
  ]
})
export class AccordionModule { }
