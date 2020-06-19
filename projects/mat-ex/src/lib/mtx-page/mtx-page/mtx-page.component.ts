import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-page',
  templateUrl: './mtx-page.component.html',
  styleUrls: ['./mtx-page.component.scss'],
  host: {class: 'mtx-page'},
  encapsulation: ViewEncapsulation.None
})
export class MtxPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
