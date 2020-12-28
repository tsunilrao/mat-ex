import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-codeblock',
  templateUrl: './mtx-codeblock.component.html',
  styleUrls: ['./mtx-codeblock.component.scss'],
  host: {class:'mtx-codeblock'},
  encapsulation: ViewEncapsulation.None
})
export class MtxCodeblockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
