import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxDirective } from './box.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoxDirective
  ],
  exports: [
    BoxDirective,
  ]
})
export class UtilityModule { }
