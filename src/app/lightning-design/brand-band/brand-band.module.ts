import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandBandComponent } from './brand-band.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BrandBandComponent],
  exports: [BrandBandComponent],
})
export class BrandBandModule { }
