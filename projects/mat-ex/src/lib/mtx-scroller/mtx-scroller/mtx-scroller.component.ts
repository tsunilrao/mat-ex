import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-scroller',
  templateUrl: './mtx-scroller.component.html',
  styleUrls: ['./mtx-scroller.component.scss'],
  host: { class: 'mtx-scroller' },
  encapsulation: ViewEncapsulation.None
})
export class MtxScrollerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
