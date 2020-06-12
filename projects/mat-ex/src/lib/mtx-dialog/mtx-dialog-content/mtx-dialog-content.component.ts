import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-dialog-content',
  templateUrl: './mtx-dialog-content.component.html',
  styleUrls: ['./mtx-dialog-content.component.scss'],
  host: {class:'mtx-dialog-content'},
  encapsulation: ViewEncapsulation.None,

})
export class MtxDialogContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
