import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ld-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() background = false;
  @Input() color = 'default';
  @Input() size = '';

  iconCategory = '';
  iconName = '';
  @Input() set icon(value: string) {
    value = value || '.';
    [this.iconCategory, this.iconName] = value.toLowerCase().split('.', 2);
  }

  @Input() title = '';

  get containerClass() {
    let className = 'slds-icon_container ';
    if (this.background) {
      className = className + `slds-icon-${this.iconCategory}-${this.iconName} `;
    }
    if (this.iconCategory === 'action') {
      className = className + 'slds-icon_container_circle ';
    }
    if (this.color === 'current') {
      className = className + 'slds-current-color ';
    }
    return className;
  }

  get iconClass() {
    return `slds-icon-text-${this.color.toLowerCase()} slds-icon_${this.size.toLowerCase()}`;
  }

  get iconLink() {
    return `/assets/icons/${this.iconCategory}-sprite/svg/symbols.svg#${this.iconName}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
