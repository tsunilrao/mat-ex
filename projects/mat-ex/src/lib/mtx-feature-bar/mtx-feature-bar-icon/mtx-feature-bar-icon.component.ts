import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-feature-bar-icon',
  host: { class: 'mtx-feature-bar-icon' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mtx-feature-bar-icon.component.html',
  styleUrls: ['./mtx-feature-bar-icon.component.scss']
})
export class MtxFeatureBarIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
