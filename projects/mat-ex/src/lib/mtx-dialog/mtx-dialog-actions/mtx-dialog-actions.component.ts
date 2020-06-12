import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-dialog-actions',
  templateUrl: './mtx-dialog-actions.component.html',
  styleUrls: ['./mtx-dialog-actions.component.scss'],
  host: {class:'mtx-dialog-actions'},
  encapsulation: ViewEncapsulation.None,

})
export class MtxDialogActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
