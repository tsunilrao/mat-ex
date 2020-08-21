import { Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'mtx-scrollview',
  templateUrl: './mtx-scrollview.component.html',
  styleUrls: ['./mtx-scrollview.component.scss'],
  host: {
    class: 'mtx-scrollview',
    '[class.mtx-vertical]': "direction == 'vertical'",
    '[class.mtx-horizontal]': "direction == 'horizontal'",
  },
  encapsulation: ViewEncapsulation.None
})
export class MtxScrollviewComponent implements OnInit {

  @Input() direction?: string = 'horizontal';

  constructor() { }

  ngOnInit(): void {
  }

}
