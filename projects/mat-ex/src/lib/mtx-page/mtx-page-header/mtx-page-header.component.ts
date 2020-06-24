import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-page-header',
  templateUrl: './mtx-page-header.component.html',
  styleUrls: ['./mtx-page-header.component.scss'],
  host: {class: 'mtx-page-header'},
  encapsulation: ViewEncapsulation.None
})
export class MtxPageHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
