import { Directive, HostBinding } from '@angular/core';

@Directive({
  /* ts-lint:disable-next-line */
  selector: '[ldBox]',
})
export class BoxDirective {
  @HostBinding('class') elementClass = 'slds-box';

  constructor() {
  }

}
