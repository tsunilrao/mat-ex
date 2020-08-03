import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-scrollview',
  templateUrl: './mtx-scrollview.component.html',
  styleUrls: ['./mtx-scrollview.component.scss'],
  host: { class: 'mtx-scrollview' },
  encapsulation: ViewEncapsulation.None
})
export class MtxScrollviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
