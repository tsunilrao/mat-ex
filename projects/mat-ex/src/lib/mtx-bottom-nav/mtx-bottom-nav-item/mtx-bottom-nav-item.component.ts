import { Component, OnInit, ViewEncapsulation, Input, Attribute } from '@angular/core';

@Component({
  selector: 'mtx-bottom-nav-item',
  templateUrl: './mtx-bottom-nav-item.component.html',
  styleUrls: ['./mtx-bottom-nav-item.component.scss'],
  host: { class: 'mtx-bottom-nav-item', tabindex: '0' },
  encapsulation: ViewEncapsulation.None
})
export class MtxBottomNavItemComponent implements OnInit {

  @Input() icon?: string

  constructor() { }

  ngOnInit(): void {
  }

}
