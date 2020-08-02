import { Component, OnInit } from '@angular/core';
import { version } from 'projects/mat-ex/package.json';

@Component({
  selector: 'app-mtx-demo',
  templateUrl: './mtx-demo.component.html',
  styleUrls: ['./mtx-demo.component.scss']
})
export class MtxDemoComponent implements OnInit {

  public version: string = version;

  constructor() { }

  ngOnInit(): void {
  }

}
