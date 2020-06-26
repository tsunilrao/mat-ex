import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-app-bar-prominent',
  templateUrl: './mtx-app-bar-prominent.component.html',
  styleUrls: ['./mtx-app-bar-prominent.component.scss'],
  host: {class: 'mtx-app-bar-prominent'},
  encapsulation: ViewEncapsulation.None
})
export class MtxAppBarProminentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
