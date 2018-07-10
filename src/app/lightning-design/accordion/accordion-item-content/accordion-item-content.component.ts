import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ld-accordion-item-content',
  templateUrl: './accordion-item-content.component.html',
  styleUrls: ['./accordion-item-content.component.css']
})
export class AccordionItemContentComponent implements OnInit {

  @HostBinding('class.slds-is-open') @Input() isOpen = false;

  constructor() { }

  ngOnInit() {
  }
}
