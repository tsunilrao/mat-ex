import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: `mtx-sidesheet, mtx-sidesheet-right, mtx-sidesheet-left`,
  templateUrl: './mtx-sidesheet.component.html',
  styleUrls: ['./mtx-sidesheet.component.scss'],
  host: { class:'mtx-sidesheet' },
  encapsulation: ViewEncapsulation.None
})
export class MtxSidesheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
