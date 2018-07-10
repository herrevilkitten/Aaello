import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ld-brand-band',
  templateUrl: './brand-band.component.html',
  styleUrls: ['./brand-band.component.css']
})
export class BrandBandComponent implements OnInit {
  @Input() size = 'medium';
  @Input() none = false;
  @Input() cover = false;
  @Input() image = '/assets/images/themes/oneSalesforce/banner-brand-default.png';

  constructor() { }

  ngOnInit() {
  }

  get className() {
    let className = `slds-brand-band slds-brand-band_${this.size.toLowerCase()}`;
    if (this.none) {
      className = className + 'slds-brand-band_none ';
    }
    if (this.cover) {
      className = className + 'slds-brand-band_cover ';
    }

    return className;
  }

  get ngStyle() {
    return {
      'background-image': `url("${this.image}"), linear-gradient(to top, rgba(221, 219, 218, 0) 0, #e8e8e8)`,
    };
  }
}
