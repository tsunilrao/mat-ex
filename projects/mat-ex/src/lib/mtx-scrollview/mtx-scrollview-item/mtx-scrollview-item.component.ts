import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-mtx-scrollview-item',
  templateUrl: './mtx-scrollview-item.component.html',
  styleUrls: ['./mtx-scrollview-item.component.scss'],
  host: { class: 'mtx-scrollview-item' },
  encapsulation: ViewEncapsulation.None
})
export class MtxScrollviewItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
