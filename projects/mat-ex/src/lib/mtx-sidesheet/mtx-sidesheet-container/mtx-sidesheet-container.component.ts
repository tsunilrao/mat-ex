import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-sidesheet-container',
  templateUrl: './mtx-sidesheet-container.component.html',
  styleUrls: ['./mtx-sidesheet-container.component.scss'],
  host: { class:'mtx-sidesheet-container' },
  encapsulation: ViewEncapsulation.None
})
export class MtxSidesheetContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
