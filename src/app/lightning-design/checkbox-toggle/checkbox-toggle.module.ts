import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxToggleComponent } from './checkbox-toggle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckboxToggleComponent],
  exports: [CheckboxToggleComponent],
})
export class CheckboxToggleModule { }
