import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `h1[mtx-app-bar-title], mtx-app-bar-title`,
  templateUrl: './mtx-app-bar-title.component.html',
  styleUrls: ['./mtx-app-bar-title.component.scss'],
  host: { class: 'mtx-app-bar-title' },
  encapsulation: ViewEncapsulation.None,
})
export class MtxAppBarTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
