import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ld-accordion-item-summary',
  templateUrl: './accordion-item-summary.component.html',
  styleUrls: ['./accordion-item-summary.component.css']
})
export class AccordionItemSummaryComponent implements OnInit {
  @Output() toggled = new EventEmitter<boolean>();
  @HostBinding('class.slds-is-open') private isOpen = false;

  constructor() {
    this.isOpen = false;
  }

  ngOnInit() {
  }
  public toggleAccordion() {
    this.isOpen = !this.isOpen;
    this.toggled.emit(this.isOpen);
  }
}
