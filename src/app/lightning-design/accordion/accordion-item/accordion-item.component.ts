import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';

import { AccordionItemContentComponent } from '../accordion-item-content/accordion-item-content.component';
import { AccordionItemSummaryComponent } from '../accordion-item-summary/accordion-item-summary.component';

@Component({
  selector: 'ld-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements AfterContentInit, OnInit {
  @Input() public isOpen: boolean;
  @ContentChild(AccordionItemContentComponent) content: AccordionItemContentComponent;
  @ContentChild(AccordionItemSummaryComponent) summary: AccordionItemSummaryComponent;

  constructor() {
    this.isOpen = false;
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.summary.toggled.subscribe((state) => {
      this.isOpen = state;
      this.content.isOpen = this.isOpen;
    });
  }
}
