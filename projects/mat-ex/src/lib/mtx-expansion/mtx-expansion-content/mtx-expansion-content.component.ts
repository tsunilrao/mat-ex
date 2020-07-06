import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mtx-expansion-content',
  templateUrl: './mtx-expansion-content.component.html',
  styleUrls: ['./mtx-expansion-content.component.scss'],
  host: {class:'mtx-expansion-content'},
  encapsulation: ViewEncapsulation.None
})
export class MtxExpansionContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
