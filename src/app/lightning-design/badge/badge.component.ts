import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ld-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  @Input() inverse = false;
  @Input() lightest = false;

  constructor() { }

  ngOnInit() {
  }

}
