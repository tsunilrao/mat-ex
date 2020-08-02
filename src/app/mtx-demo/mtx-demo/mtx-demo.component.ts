import { Component, OnInit } from '@angular/core';
import { version } from 'projects/mat-ex/package.json';

@Component({
  selector: 'mtx-demo',
  templateUrl: './mtx-demo.component.html',
  styleUrls: ['./mtx-demo.component.scss'],
  host: { class: 'mtx-demo'}
})
export class MtxDemoComponent implements OnInit {

  public version: string = version;

  constructor() { }

  ngOnInit(): void {
  }

}
