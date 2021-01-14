import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-nav',
  templateUrl: './mtx-nav.component.html',
  styleUrls: ['./mtx-nav.component.scss'],
  host: {
    class: 'mtx-nav',
    '[class.mtx-nav-item-active]': "active!==undefined",
  },
  encapsulation: ViewEncapsulation.None
})
export class MtxNavComponent implements OnInit {

  @Input() active;

  constructor() { }

  ngOnInit(): void {
  }

}
