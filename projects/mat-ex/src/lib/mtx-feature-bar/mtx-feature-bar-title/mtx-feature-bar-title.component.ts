import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-feature-bar-title',
  host: { class: 'mtx-feature-bar-title' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mtx-feature-bar-title.component.html',
  styleUrls: ['./mtx-feature-bar-title.component.scss']
})
export class MtxFeatureBarTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
