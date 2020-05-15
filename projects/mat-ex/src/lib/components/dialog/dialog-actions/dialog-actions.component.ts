import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-dialog-actions',
  host: {class:'mtx-dialog-actions'},
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dialog-actions.component.html',
  styleUrls: ['./dialog-actions.component.scss']
})
export class DialogActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
