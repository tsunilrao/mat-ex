import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'mtx-dialog-icon',
  templateUrl: './mtx-dialog-icon.component.html',
  styleUrls: ['./mtx-dialog-icon.component.scss'],
  host: {class:'mtx-dialog-icon'},
  encapsulation: ViewEncapsulation.None,

})
export class MtxDialogIconComponent implements OnInit {

  @Input() color;

  constructor() { }

  ngOnInit(): void {
  }

}
