import { Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtx-nav-item',
  templateUrl: './mtx-nav-item.component.html',
  styleUrls: ['./mtx-nav-item.component.scss'],
  host: { class: 'mtx-nav-item' },
  encapsulation: ViewEncapsulation.None
})
export class MtxNavItemComponent implements OnInit {

  @Input() icon?: string

  constructor() { }

  ngOnInit(): void {
  }

}
