import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-page-footer',
  templateUrl: './mtx-page-footer.component.html',
  styleUrls: ['./mtx-page-footer.component.scss'],
  host: {class: 'mtx-page-footer'},
  encapsulation: ViewEncapsulation.None
})
export class MtxPageFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
