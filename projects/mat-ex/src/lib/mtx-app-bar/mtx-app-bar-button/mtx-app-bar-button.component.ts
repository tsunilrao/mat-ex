import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-app-bar-button',
  templateUrl: './mtx-app-bar-button.component.html',
  styleUrls: ['./mtx-app-bar-button.component.scss'],
  host: {class: 'mtx-app-bar-button'},
  encapsulation: ViewEncapsulation.None
})
export class MtxAppBarButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
