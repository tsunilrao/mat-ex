import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-dialog-content',
  host: {class:'mtx-dialog-content'},
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
