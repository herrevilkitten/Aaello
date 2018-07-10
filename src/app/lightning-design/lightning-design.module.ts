import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from './accordion/accordion.module';
import { BadgeModule } from './badge/badge.module';
import { BrandBandModule } from './brand-band/brand-band.module';
import { CheckboxToggleModule } from './checkbox-toggle/checkbox-toggle.module';
import { IconModule } from './icon/icon.module';
import { InputModule } from './input/input.module';
import { CardModule } from './card/card.module';
import { UtilityModule } from './utility/utility.module';

@NgModule({
  imports: [
    CommonModule,

    AccordionModule,
    BadgeModule,
    BrandBandModule,
    CardModule,
    CheckboxToggleModule,
    IconModule,
    InputModule,
    UtilityModule,
  ],

  exports: [
    AccordionModule,
    BadgeModule,
    BrandBandModule,
    CardModule,
    CheckboxToggleModule,
    IconModule,
    InputModule,
    UtilityModule,
  ]
})
export class LightningDesignModule { }
