import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MtxModalComponent } from '../mtx-modal/mtx-modal/mtx-modal.component';

@Component({
  selector: 'mtx-loader',
  templateUrl: './mtx-loader.component.html',
  styleUrls: ['./mtx-loader.component.scss']
})
export class MtxLoaderComponent implements OnInit {

  @Input('message') message: string = 'Please wait...'

  @ViewChild('loader') loader: MtxModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.loader.open()
  }

  hide() {
    this.loader.close()
  }
}
