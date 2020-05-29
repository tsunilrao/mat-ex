import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'mtx-feature-bar',
  host: { class: 'mtx-feature-bar' },
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mtx-feature-bar.component.html',
  styleUrls: ['./mtx-feature-bar.component.scss']
})
export class MtxFeatureBarComponent implements OnInit {

  @Input() matMenu?

  constructor() { }

  ngOnInit(): void {
  }

}
